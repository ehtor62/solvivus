import type Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
	const body = await req.text();
	const signature = headers().get('Stripe-Signature')!;

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			process.env.STRIPE_WEBHOOK_SECRET ?? ''
		);
	} catch (error: any) {
		console.error('Webhook signature verification failed:', error.message);
		return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
	}

	const session = event.data.object as Stripe.Checkout.Session;
	console.log('Received event:', event.type, session);

	if (event.type === 'checkout.session.completed') {
		const subscription = await stripe.subscriptions.retrieve(
			session.subscription as string
		);
		console.log('Subscription retrieved:', subscription);

		if (!session?.metadata?.userId) {
			console.log('User ID is missing from metadata');
			return new NextResponse('User id is required', { status: 400 });
		}

		await prismadb.userSubscription.create({
			data: {
				userId: session?.metadata?.userId,
				stripeSubscriptionId: subscription.id,
				stripeCustomerId: subscription.customer as string,
				stripePriceId: subscription.items.data[0].price.id,
				stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
			}
		});
		console.log('User subscription created in database');
	}

	if (event.type === 'invoice.payment_succeeded') {
		const subscription = await stripe.subscriptions.retrieve(
			session.subscription as string
		);
		console.log('Subscription retrieved for payment success:', subscription);

		await prismadb.userSubscription.update({
			where: {
				stripeSubscriptionId: subscription.id
			},
			data: {
				stripePriceId: subscription.items.data[0].price.id,
				stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
			}
		});
		console.log('User subscription updated in database');
	}

	return new NextResponse(null, { status: 200 });
}
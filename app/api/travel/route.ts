import { auth } from "@clerk/nextjs/server"
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from "openai/resources/chat/completions"
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

const instructionMessage: ChatCompletionMessageParam = {
    role: "system",
    content: "You are a tourist guide. You know everything about all locations"
}

export async function POST(
    req: Request
) {
    try {
        const { userId } : { userId: string | null } = auth();
        const body = await req.json()
        const { messages, selectedAddress, includeLocation } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }
       
        if (!openai.apiKey) {
            return new NextResponse("OpenAI API key not configured", {status: 500})
        }

        if(!messages) {
            return new NextResponse("Messages are required", {status: 400})
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
			return new NextResponse('Free trial has expired', { status: 403 });
		}

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        })
        let responseContent = response.choices[0].message.content;
        if (includeLocation && selectedAddress) {
            responseContent = `Your selected location is ${selectedAddress}. \n\n${responseContent}`;
        }

        if (!isPro) {
            await increaseApiLimit();
        }

        return NextResponse.json({ content: responseContent });

    } catch (error) {
        console.log("[CODE_ERROR]", error)
        return new NextResponse("Internal error", {status:500})
    }
}
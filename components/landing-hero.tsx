'use client';

import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { Button } from '@/components/ui/button';

export const LandingHero = (): React.ReactNode => {
	const { isSignedIn } = useAuth();

	return (
		<div className='text-white font-bold py-40 text-center space-y-5'>
			<div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
				<h1>AI Tools in your Pocket for</h1>
				<div className='text-transparent leading-normal bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
					<TypewriterComponent
						options={{
							strings: [
								'Travel Guidance.',
								'AI Conversation.',
								'Image Creation.',
								'Music Generation.',
								'Video Snippets.'
							],
							autoStart: true,
							loop: true
						}}
					/>
				</div>
			</div>
			<div className='text-sm md:text-xl font-light text-zinc-400'>
				Create content using AI 10x faster.
			</div>
			<div>
				<Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
					<Button

						className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
					>
						Start Generating For Free
					</Button>
				</Link>

			</div>
			<div className='text-zinc-400 text-sm md:text-sm font-normal'>
				No credit card required.
			</div>
		</div>
	);
};
import LandingPageNavigation from '@/components/LandingPageNavigation';
import { PropsWithChildren } from 'react';
import NextTopLoader from 'nextjs-toploader';

export default function UserContentLayout({ children }: PropsWithChildren) {
	return (
		<>
			<NextTopLoader showSpinner={false} />
			<main className='z-0 max-w-[100vw] bg-noiseGradient min-h-screen h-full  text-white'>
				<LandingPageNavigation />
				{children}
			</main>
		</>
	);
}

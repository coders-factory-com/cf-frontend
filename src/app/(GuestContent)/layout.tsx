import LandingPageNavigation from '@/components/LandingPageNavigation';
import { PropsWithChildren } from 'react';

export default function UserContentLayout({ children }: PropsWithChildren) {
	return (
		<main
			style={{
				backgroundImage: `url('noise-bg.png'), linear-gradient(225deg, rgba(19, 53, 52, 1) 15%, rgba(9, 16, 35, 1) 40%)`,
			}}
			className='z-0 max-w-[100vw] min-h-screen h-full  text-white'>
			<LandingPageNavigation />
			{children}
		</main>
	);
}

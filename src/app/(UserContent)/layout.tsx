import UserContentNavigation from '@/components/wrappers/UserContentNavigation';
import { PropsWithChildren } from 'react';
import NextTopLoader from 'nextjs-toploader';

export default function UserContentLayout({ children }: PropsWithChildren) {
	return (
		<>
			<NextTopLoader showSpinner={false} />
			<main className='w-[calc(100%-191px)] left-[191px] relative '>
				<UserContentNavigation />
				{children}
			</main>
		</>
	);
}

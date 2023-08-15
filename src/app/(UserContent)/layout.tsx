import UserContentNavigation from '@/components/wrappers/UserContentNavigation';
import { PropsWithChildren } from 'react';

export default function UserContentLayout({ children }: PropsWithChildren) {
	return (
		<main className='w-[calc(100%-191px)] left-[191px] relative '>
			<UserContentNavigation />
			{children}
		</main>
	);
}

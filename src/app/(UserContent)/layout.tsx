import UserContentNavigation from '@/components/wrappers/UserContentNavigation';

export default function UserContentLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className='w-[calc(100%-191px)] left-[191px] relative '>
			<UserContentNavigation />
			{children}
		</main>
	);
}

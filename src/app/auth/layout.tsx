import FormHeader from '@/components/FormHeader';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<div className='flex w-screen h-screen justify-center items-start bg-neutral-50'>
			<div className='xl:px-0 px-4 text-base lg:text-lg w-full max-w-[500px]'>
				<FormHeader />
				<div className='shadow-lg pb-8 bg-white'>{children}</div>
			</div>
		</div>
	);
}

import { ReactNode } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

function ErrorMessage({ children }: { children: ReactNode }) {
	return (
		<div className={`self-stretch w-full mt-8 py-4 bg-red-100 border-red-600 border-l-4 border-opacity-30 justify-start items-start gap-4 inline-flex`}>
			<AiFillCloseCircle className='text-red-600 text-xl ml-4' />
			<div className='text-neutral-900 text-sm font-bold leading-[18px] tracking-tight'>{children}</div>
		</div>
	);
}

export default ErrorMessage;

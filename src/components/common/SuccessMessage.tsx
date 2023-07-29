import { ReactNode } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function SuccessMessage({ children }: { children: ReactNode }) {
	return (
		<div className={`self-stretch w-full mt-8 py-4 bg-green-100 border-green-600 border-l-4 border-opacity-30 justify-start items-start gap-4 inline-flex`}>
			<AiFillCheckCircle className='text-green-600 text-xl ml-4' />
			<div className='text-neutral-900 text-sm font-bold leading-[18px] tracking-tight'>{children}</div>
		</div>
	);
}

export default SuccessMessage;

import { ReactNode } from 'react';

interface SectionProps {
	title: string;
	timeRead: string;
	children: ReactNode;
}

const Section = ({ title, timeRead, children }: SectionProps) => (
	<div className='self-stretch min-h-[600px] flex-col justify-start items-start gap-4 flex'>
		<div className='self-stretch justify-between items-center inline-flex'>
			<div className='text-black text-[20px] font-medium'>{title}</div>
			<div className='bg-blue-100 rounded-full justify-start items-start flex'>
				<div className='w-[109px] rounded-3xl justify-start items-center gap-0.5 flex'>
					<div className='px-2 pb-0.5 flex-col justify-start items-center inline-flex'>
						<div className='text-blue-700 text-[12px] font-normal leading-none tracking-wide'>{timeRead} minutes read</div>
						<div className='bg-white justify-start items-start gap-4 inline-flex'></div>
					</div>
				</div>
			</div>
		</div>
		<div className='self-stretch text-neutral-700 text-[14px] font-normal leading-normal'>{children}</div>
	</div>
);
export default Section;

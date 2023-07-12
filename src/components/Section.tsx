import Image from 'next/image';

const Section = ({ title, timeRead, content, image }: SectionProps) => {
	return (
		<div id={title.replace(/\s+/g, '')} className='self-stretch min-h-[600px] flex-col justify-start items-start gap-4 flex'>
			<div className='self-stretch justify-between items-center inline-flex'>
				<div className='text-black text-[20px] font-medium'>{title}</div>
				<div className='bg-blue-100 rounded-full py-1 px-2 justify-start items-start flex'>
					<div className='text-blue-700 text-[12px] font-normal leading-none tracking-wide text-center whitespace-nowrap'>{timeRead} minutes read</div>
				</div>
			</div>
			<div className='self-strech text-neutral-700 text-[14px] font-normal leading-normal flex flex-col justify-center items-start '>
				{content}
				{image && <Image style={{ height: '100%', width: '100%' }} width={330} height={330} className='mt-4 min-h-[150px] max-h-[300px]  object-contain' src={image} alt='placeholder' />}
			</div>
		</div>
	);
};
export default Section;

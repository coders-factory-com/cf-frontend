import React from 'react';
import Section from '../Section';
import Image from 'next/image';
import { cards, sections } from '@/utils';
import Card from '../Card';
import ScrollProgressBar from '../ScrollProgressBar';

function TheoryContent() {
	return (
		<>
			<div className=' right-20 top-[176px]  fixed z-10 flex-col justify-start items-start flex'>
				<div className='w-full h-fit relative'>
					{cards.map((card, index) => (
						<Card key={index} title={card.title} readTime={card.readTime} />
					))}
					<ScrollProgressBar />
				</div>
				<div className='relative my-8 py-8 pl-4 pr-[30px] bg-orange-200 justify-start items-center flex'>
					<div className='text-black text-[14px] font-normal leading-none tracking-wide'>
						This is my first and
						<br />
						only note on this
						<br />
						page
					</div>
					<Image src='./Trash-can.svg' width={20} height={20} alt='' className='absolute bottom-2 right-2' />
				</div>
				<div className=' bg-white border w-full border-blue-600 flex-col justify-center items-center flex'>
					<div className=' py-4 justify-start items-center flex'>
						<div className='text-blue-600 text-[14px] font-normal leading-none tracking-wide'>Add Note +</div>
					</div>
				</div>
			</div>
			<div className='theoryContent left-[81px] ml-[10%] top-[30px]  flex-col justify-start items-start flex'>
				<div className='self-stretch  py-[42px] bg-white border mb-48  border-neutral-200 flex-col justify-start items-start gap-6 flex'>
					<div className='self-stretch px-6 flex-col justify-start items-start gap-10 flex'>
						{sections.map((section, index) => (
							<Section key={index} title={section.title} timeRead={section.timeRead} content={section.content} image={section.image} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default TheoryContent;

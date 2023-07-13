import React from 'react';
import Section from '../Section';
import Image from 'next/image';
import { cards, sections } from '@/utils';
import Card from '../Card';
import ScrollProgressBar from '../ScrollProgressBar';
import Notes from '../Notes';

function TheoryContent() {
	return (
		<>
			<div className='right-20 top-[176px]  fixed z-10 flex-col justify-start items-start flex'>
				<div className='w-full h-fit relative'>
					{cards.map((card, index) => (
						<Card key={index} title={card.title} readTime={card.readTime} />
					))}
					<ScrollProgressBar />
					<Notes />
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

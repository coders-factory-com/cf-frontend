'use client';
import Breadcrumb from '@/components/Breadcrumb';
import OtherContent from '@/components/HomeContent/OtherContent';
import QuizesContent from '@/components/HomeContent/QuizesContent';
import TasksContent from '@/components/HomeContent/TasksContent';
import TheoryContent from '@/components/HomeContent/TheoryContent';
import TopicCard from '@/components/TopicCard';
import { breadcrumbs, topicCards } from '@/utils';
import { useState } from 'react';

export default function Home() {
	const [selectedCard, setSelectedCard] = useState('Theory');

	return (
		<main className=' max-w-[100vw]  h-screen'>
			<header className='left-[270px] top-[30px] absolute justify-start flex-col items-start gap-2 flex'>
				<div>
					{breadcrumbs.map((breadcrumb, index) => (
						<Breadcrumb key={index} textColor={breadcrumb.textColor} text={breadcrumb.text} />
					))}
				</div>
				<div className=' text-black text-[24px] font-medium'>Functional data processing with streams</div>
				<div className='justify-start items-start gap-[1px] flex'>
					<div className='justify-start items-start gap-[1px] flex'>
						{topicCards.map((card, index) => (
							<TopicCard key={index} title={card.title} onClick={() => setSelectedCard(card.title)} isActive={selectedCard === card.title} />
						))}
					</div>
				</div>
			</header>
			<section className='h-auto relative bg-white '>
				<div className='w-[calc(100%-191px)] left-[191px] top-[176px] absolute bg-neutral-50'>
					<div className='max-w-[1280px] '>
						{selectedCard === 'Theory' && <TheoryContent />}
						{selectedCard === 'Tasks' && <TasksContent />}
						{selectedCard === 'Quizes' && <QuizesContent />}
						{selectedCard === 'Other' && <OtherContent />}
					</div>
				</div>
			</section>
		</main>
	);
}

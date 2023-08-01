'use client';
import FlashcardsContainer from '@/components/HomeContent/containers/FlashcardsContainer';
import OtherContainer from '@/components/HomeContent/containers/OtherContainer';
import QuizesContainer from '@/components/HomeContent/containers/QuizesContainer';
import TaskContainer from '@/components/HomeContent/containers/TasksContainer';
import TheoryContainer from '@/components/HomeContent/containers/TheoryContainer';
import TopicCard from '@/components/TopicCard';
import { useState } from 'react';
import { categories, topicCards } from '@/utils';
import { usePathname } from 'next/navigation';

const ContentPage = () => {
	const pathname = usePathname();
	const segment = pathname.split('/').filter(segment => segment);
	const [selectedCard, setSelectedCard] = useState('Theory');
	const category = categories.find(category => category.name.toLowerCase().split(' ').join('-') === segment[2]);

	if (!category) {
		return <p className='w-1/2 relative left-[270px]'>Incorrect category</p>;
	}

	const subCategory = category.subcategories.find(subCategory => subCategory.name.toLowerCase().split(' ').join('-') === segment[3]);
	if (!subCategory) {
		return <p className='w-1/2 relative left-[270px]'>Incorrect subcategory</p>;
	}

	const level = subCategory.levels.find(level => level.toLowerCase().split(' ').join('-') === segment[4]);
	if (!level) {
		return <p className='w-1/2 relative left-[270px]'>Incorrect level</p>;
	}

	return (
		<>
			<header className='left-[270px] -z-10 top-[30px] absolute justify-start flex-col items-start gap-2 flex'>
				<div className=' text-black text-[24px] font-medium'>Functional data processing with streams</div>
				<div className='justify-start items-start gap-[1px] flex'>
					<div className='justify-start items-start gap-[1px] flex'>
						{topicCards.map((card, index) => (
							<TopicCard key={index} title={card.title} onClick={() => setSelectedCard(card.title)} isActive={selectedCard === card.title} />
						))}
					</div>
				</div>
			</header>
			<section className='w-[calc(100%-191px)] left-[191px]  top-[176px] absolute bg-neutral-50'>
				<div className={`${selectedCard === 'Tasks' ? 'w-full' : 'max-w-[1280px]'}`}>
					{selectedCard === 'Theory' && <TheoryContainer />}
					{selectedCard === 'Quizes' && <QuizesContainer />}
					{selectedCard === 'Other' && <OtherContainer />}
					{selectedCard === 'Flashcards' && <FlashcardsContainer />}
					{selectedCard === 'Tasks' && <TaskContainer />}
				</div>
			</section>
		</>
	);
};

export default ContentPage;

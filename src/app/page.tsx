'use client';
import Button from '@/common/Button';
import Breadcrumb from '@/components/Breadcrumb';
import FlashcardsContainer from '@/components/HomeContent/FlashcardsContainer';
import OtherContainer from '@/components/HomeContent/OtherContainer';
import OtherContent from '@/components/HomeContent/OtherContainer';
import QuizesContainer from '@/components/HomeContent/QuizContent/QuizesContainer';
import QuizesContent from '@/components/HomeContent/QuizContent/QuizesContainer';
import TasksContent from '@/components/HomeContent/TasksContainer';
import TheoryContent from '@/components/HomeContent/TheoryContainer';
import TopicCard from '@/components/TopicCard';
import { breadcrumbs, mainPagePhotoData, topicCards } from '@/utils';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [selectedCard, setSelectedCard] = useState('Theory');
	//later will be added probably redux for global managment state
	const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<main className=' max-w-[100vw]  h-screen'>
			{isLoggedIn ? (
				<>
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
								{selectedCard === 'Quizes' && <QuizesContainer />}
								{selectedCard === 'Other' && <OtherContainer/>}
								{selectedCard === 'Flashcards' && <FlashcardsContainer/>}
                                
							</div>
							{selectedCard === 'Tasks' && <TasksContent />}
						</div>
					</section>
				</>
			) : (
				<div className='w-[calc(100%-191px)] left-[191px] h-full absolute p-8 bg-neutral-50'>
					<h1 className='text-7xl font-bold text-center'>Coders-Factory - Enhance Your Mastery</h1>
					<div className=' items-center justify-center w-full space-x-12 flex my-12'>
						<Button
							onClick={() => {
								setLoggedIn(!isLoggedIn);
							}}
							text='Login'
						/>
						<Button text='Sing Up' />
					</div>
					<h2 className='text-5xl font-bold '>Explore</h2>
					<div className='w-full justify-evenly flex'>
						<div className='flex justify-evenly my-8 flex-wrap  w-[800px]'>
							{mainPagePhotoData.map((photo, index) => (
								<Image alt='' width={400} height={400} key={index} className='object-contain w-1/2 p-1' src={photo.image} />
							))}
						</div>
					</div>
				</div>
			)}
		</main>
	);
}

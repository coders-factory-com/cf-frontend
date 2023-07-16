'use client';
import Button from '@/common/Button';
import Breadcrumb from '@/components/Breadcrumb';
import FlashcardsContainer from '@/components/HomeContent/FlashcardsContainer';
import OtherContainer from '@/components/HomeContent/OtherContainer';
import QuizesContainer from '@/components/HomeContent/QuizContent/QuizesContainer';
import TaskContainer from '@/components/HomeContent/TasksContainer';
import TheoryContainer from '@/components/HomeContent/TheoryContainer';
import TopicCard from '@/components/TopicCard';
import { login, selectIsLoggedIn } from '@/redux/authSlice';
import { breadcrumbsData, mainPagePhotoData, topicCards } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
	const [selectedCard, setSelectedCard] = useState('Theory');
//later will be added probably redux for global managment state
    const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<main className=' max-w-[100vw]  min-h-screen h-full'>
			{isLoggedIn ? (
				<>
					<header className='left-[270px] top-[30px] absolute justify-start flex-col items-start gap-2 flex'>
						<div>
							{breadcrumbs.map((breadcrumb, index) => (
								<Breadcrumb key={index} handleClick={handleClick} index={index} text={breadcrumb.text} />
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
			) : (
				<div className='w-[calc(100%-191px)] left-[191px] h-full relative p-8 bg-neutral-50'>
					<h1 className='text-7xl font-bold text-center'>Coders-Factory - Enhance Your Mastery</h1>
					<div className=' items-center justify-center w-full space-x-12 flex my-12'>
						<Button
							onClick={() => {
								dispatch(login());
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

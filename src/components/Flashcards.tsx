'use client';
import Button from '@/components/common/Button';
import { MouseEvent, useState } from 'react';

type Flashcard = {
	id: number;
	title: string;
	answer: string;
};
type Category = {
	id: number;
	name: string;
	flashcards: Flashcard[];
};

type FlashcardsProps = {
	flashcards: Category[];
};

const Flashcards = ({ flashcards }: FlashcardsProps) => {
	const [currentFlashcardCategory, setCurrentFlashcardCategory] = useState<Category | null>(null);
	const [currentFlashcard, setCurrentFlashcard] = useState<Flashcard | null>(null);
	const [showAnswer, setShowAnswer] = useState(false);
	const [flashcardIndex, setFlashcardIndex] = useState(0);

	const handleClick = (category: Category) => {
		setCurrentFlashcardCategory(category);
		setCurrentFlashcard(category.flashcards[flashcardIndex]);
	};

	const handleClose = () => {
		setCurrentFlashcard(null);
		setCurrentFlashcardCategory(null);
		setFlashcardIndex(0);
	};

	const handleShowAnswer = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setShowAnswer(prev => !prev);
	};

	const nextFlashcard = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		//manualy change
		setFlashcardIndex(prev => {
			const newIndex = prev + 1;

			if (newIndex >= currentFlashcardCategory!.flashcards.length) {
				alert("You've reached the end of the flashcards. Returning to the first flashcard.");
				setCurrentFlashcard(currentFlashcardCategory!.flashcards[0]);
				return 0;
			}

			setCurrentFlashcard(currentFlashcardCategory!.flashcards[newIndex]);
			setShowAnswer(false);
			return newIndex;
		});

		// try {
		// 	const response = await fetch('http://example.com/api/', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({
		// 			flashcardId: currentFlashcard.id,
		// 			responseLevel,
		// 		}),
		// 	});
		// 	if (!response.ok) {
		// 		throw new Error('HTTP error ' + response.status);
		// 	}
		// 	setFlashcardIndex(prevIndex => prevIndex + 1);
		// 	setCurrentFlashcard(currentFlashcardCategory.flashcards[flashcardIndex + 1]);
		// 	setShowAnswer(false);
		// } catch (error) {
		// 	console.error('An error occurred:', error);
		// }
	};

	return (
		<div>
			{!currentFlashcardCategory &&
				flashcards.map(category => (
					<div key={category.id}>
						<h2 className='flex p-4 cursor-pointer shadow-lg shadow-black w-48  justify-center items-center' onClick={() => handleClick(category)}>
							{category.name}
						</h2>
					</div>
				))}

			{currentFlashcard && (
				<div onClick={handleClose} className='fixed z-10 inset-0 overflow-y-auto flex items-center justify-center'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
					<div className='inline-block align-middle bg-white rounded p-12 m-2 relative mx-auto max-w-md w-full'>
						<h2 className='text-2xl'>{currentFlashcard.title}</h2>
						{showAnswer && <p className='mt-4'>{currentFlashcard.answer}</p>}
						<Button
							variant='secondary'
							text={showAnswer ? 'Hide Answer' : 'Show Answer'}
							onClick={e => {
								handleShowAnswer(e);
							}}
						/>
						<div className='mt-4 flex w-full justify-between'>
							{/* there will be lvls on nextFlashcards  */}
							<Button addedClassName='whitespace-nowrap !px-2' variant='secondary' text='Get it' onClick={e => nextFlashcard(e)} />
							<Button addedClassName='whitespace-nowrap !px-2' variant='secondary' text="Don't understand" onClick={e => nextFlashcard(e)} />
							<Button addedClassName='whitespace-nowrap !px-2' variant='secondary' text='Know a little bit' onClick={e => nextFlashcard(e)} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Flashcards;

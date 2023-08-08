import { useState, MouseEvent } from 'react';

export const useFlashcards = () => {
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
		});
	};

	return {
		currentFlashcard,
		currentFlashcardCategory,
		showAnswer,
		handleClick,
		handleClose,
		handleShowAnswer,
		nextFlashcard,
	};
};

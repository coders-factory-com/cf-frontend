'use client';
import Button from '@/components/common/Button';
import { useFlashcards } from '@/customHooks/useFlashcards';

interface FlashcardsProps {
	flashcards: Category[];
}

const Flashcards = ({ flashcards }: FlashcardsProps) => {
	const { currentFlashcard, currentFlashcardCategory, showAnswer, handleClick, handleClose, handleShowAnswer, nextFlashcard } = useFlashcards();
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

'use client';
import Button from '@/components/common/Button';
import { useFlashcards } from '@/customHooks/useFlashcards';
import ErrorMessage from './common/ErrorMessage';

interface FlashcardsProps {
  flashcards: Category[];
}

const Flashcards = ({ flashcards }: FlashcardsProps) => {
  const {
    currentFlashcard,
    currentFlashcardCategory,
    showAnswer,
    handleClick,
    handleClose,
    handleShowAnswer,
    nextFlashcard,
  } = useFlashcards();
  return (
    <div>
      <div>
        {!currentFlashcardCategory && !flashcards?.length && (
          <ErrorMessage>Ups we have problem with fetch flashcards!</ErrorMessage>
        )}
        {!currentFlashcardCategory &&
          flashcards?.map((category) => (
            <div key={category.id}>
              <h2
                className='flex w-48 cursor-pointer items-center justify-center p-4  shadow-lg shadow-black'
                onClick={() => handleClick(category)}
              >
                {category.name}
              </h2>
            </div>
          ))}
      </div>
      {currentFlashcard && (
        <div onClick={handleClose} className='fixed inset-0 z-10 flex items-center justify-center overflow-y-auto'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
          <div className='relative m-2 mx-auto inline-block w-full max-w-md rounded bg-white p-12 align-middle'>
            <h2 className='text-2xl'>{currentFlashcard.title}</h2>
            {showAnswer && <p className='mt-4'>{currentFlashcard.answer}</p>}
            <Button
              variant='secondary'
              text={showAnswer ? 'Hide Answer' : 'Show Answer'}
              onClick={(e) => {
                handleShowAnswer(e);
              }}
            />
            <div className='mt-4 flex w-full justify-between'>
              {/* there will be lvls on nextFlashcards  */}
              <Button
                addedClassName='whitespace-nowrap !px-2'
                variant='secondary'
                text='Get it'
                onClick={(e) => nextFlashcard(e)}
              />
              <Button
                addedClassName='whitespace-nowrap !px-2'
                variant='secondary'
                text="Don't understand"
                onClick={(e) => nextFlashcard(e)}
              />
              <Button
                addedClassName='whitespace-nowrap !px-2'
                variant='secondary'
                text='Know a little bit'
                onClick={(e) => nextFlashcard(e)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcards;

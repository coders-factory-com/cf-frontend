import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import AnswerCheckbox from './AnswerCheckbox';

const QuizTask = ({ quizId, task, errors, selectedAnswer, onAnswerSelected, submitted }: QuizTaskProps) => {
	const { question, description, options, correctAnswerId, id } = task;

	const isCorrect = correctAnswerId === selectedAnswer;

	return (
		<section className='border-b-[1px] w-full pb-12 border-gray-300'>
			<div className='my-4 w-full text-black text-xl font-medium'>{question}</div>
			<div className='text-neutral-700 text-sm font-normal leading-normal'>{description}</div>
			{submitted && (
				<div className={`self-stretch w-full mt-8 py-4 ${isCorrect ? 'bg-green-100 border-green-600' : 'bg-red-100 border-red-600'} border-l-4 border-opacity-30 justify-start items-start gap-4 inline-flex`}>
					{isCorrect ? <AiFillCheckCircle className='text-green-600 text-xl ml-4' /> : <AiFillCloseCircle className='text-red-600 text-xl ml-4' />}
					<div className='text-neutral-900 text-sm font-bold leading-[18px] tracking-tight'>{isCorrect ? 'Correct answer' : 'Bad answer'}</div>
				</div>
			)}
			<div className='my-4 text-neutral-700 text-sm font-normal leading-normal'>Choose your option</div>
			<div>
				{options.map(option => (
					<div key={option.id}>
						<AnswerCheckbox quizId={quizId} submitted={submitted} taskId={id} id={option.id} text={option.text} isChecked={option.id === selectedAnswer} onAnswerSelected={onAnswerSelected} />
					</div>
				))}
				{errors && errors[quizId] && errors[quizId][id] && <div className='text-red-600'>{errors[quizId][id]}</div>}
			</div>
		</section>
	);
};

export default QuizTask;


import AnswerCheckbox from './AnswerCheckbox';
import ErrorMessage from '@/components/common/ErrorMessage';
import SuccessMessage from '@/components/common/SuccessMessage';

interface QuizTaskProps {
	task: {
		id: number;
		question: string;
		description: string;
		options: [{
			id: number;
			text: string
		}];
		correctAnswerId: number;
	};
	selectedAnswer: number;
	onAnswerSelected: (id: number) => void;
	submitted: boolean;
	errors: {
		[quizId: number]: {
			[taskId: number]: string
		}
	};
	quizId: number;
}

const QuizTask = ({ quizId, task, errors, selectedAnswer, onAnswerSelected, submitted }: QuizTaskProps) => {
	const { question, description, options, correctAnswerId, id } = task;

	const isCorrect = correctAnswerId === selectedAnswer;

	return (
		<section className='border-b-[1px] w-full pb-12 border-gray-300'>
			<div className='my-4 w-full text-black text-xl font-medium'>{question}</div>
			<div className='text-neutral-700 text-sm font-normal leading-normal'>{description}</div>
			{submitted && <>{isCorrect ? <SuccessMessage>Good Answer</SuccessMessage> : <ErrorMessage>Bad Answer</ErrorMessage>}</>}
			<div className='my-4 text-neutral-700 text-sm font-normal leading-normal'>Choose your option</div>
			<div>
				{options.map(option => (
					<div key={option.id}>
						<AnswerCheckbox quizId={quizId} submitted={submitted} taskId={id} id={option.id} text={option.text} isChecked={option.id === selectedAnswer} onAnswerSelected={onAnswerSelected} />
					</div>
				))}
				{errors && errors[quizId] && errors[quizId][id] && <ErrorMessage>{errors[quizId][id]}</ErrorMessage>}
			</div>
		</section>
	);
};

export default QuizTask;

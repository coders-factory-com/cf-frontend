import AnswerCheckbox from './AnswerCheckbox';
import ErrorMessage from '@/components/common/ErrorMessage';
import SuccessMessage from '@/components/common/SuccessMessage';
import { Task } from './QuizContainer';

export interface ExtendedTask extends Task {
  question?: string;
  description?: string;
  options?: [
    {
      id: number;
      text: string;
    },
  ];
}

interface QuizTaskProps {
  task: ExtendedTask;
  selectedAnswer: number;
  onAnswerSelected: (id: number) => void;
  submitted: boolean;
  errors: {
    [quizId: number]: {
      [taskId: number]: string;
    };
  };
  quizId: number;
}

const QuizTask = ({ quizId, task, errors, selectedAnswer, onAnswerSelected, submitted }: QuizTaskProps) => {
  const { question, description, options, correctAnswerId, id } = task;

  const isCorrect = correctAnswerId === selectedAnswer;

  return (
    <section className='w-full border-b-[1px] border-gray-300 pb-12'>
      <div className='my-4 w-full text-xl font-medium text-black'>{question}</div>
      <div className='text-sm font-normal leading-normal text-neutral-700'>{description}</div>
      {submitted && (
        <>{isCorrect ? <SuccessMessage>Good Answer</SuccessMessage> : <ErrorMessage>Bad Answer</ErrorMessage>}</>
      )}
      <div className='my-4 text-sm font-normal leading-normal text-neutral-700'>Choose your option</div>
      <div>
        {options?.map((option) => (
          <div key={option.id}>
            <AnswerCheckbox
              quizId={quizId}
              submitted={submitted}
              taskId={id}
              id={option.id}
              text={option.text}
              isChecked={option.id === selectedAnswer}
              onAnswerSelected={onAnswerSelected}
            />
          </div>
        ))}
        {errors && errors[quizId] && errors[quizId][id] && <ErrorMessage>{errors[quizId][id]}</ErrorMessage>}
      </div>
    </section>
  );
};

export default QuizTask;

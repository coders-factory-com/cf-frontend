interface AnswerCheckboxProps {
  taskId: number;
  id: number;
  text: string;
  isChecked: boolean;
  onAnswerSelected: (id: number) => void;
  submitted: boolean;
  quizId: number;
}

const AnswerCheckbox = ({ quizId, taskId, id, text, isChecked, onAnswerSelected, submitted }: AnswerCheckboxProps) => {
  const uniqueId = `${quizId}-${taskId}-${id}`;

  return (
    <div className='flex flex-col items-start justify-start gap-2 bg-white'>
      <div className='inline-flex items-start justify-start gap-2'>
        <div className='relative h-5 w-5 bg-white'>
          <input
            disabled={submitted}
            required
            type='radio'
            id={uniqueId}
            checked={isChecked}
            onChange={() => onAnswerSelected(id)}
          />
        </div>
        <div className='inline-flex flex-col items-start justify-start py-px'>
          <label
            htmlFor={uniqueId}
            className={`${
              submitted ? 'text-neutral-500' : 'text-neutral-900'
            } text-sm font-normal leading-[18px] tracking-tight`}
          >
            {text}
          </label>
        </div>
      </div>
    </div>
  );
};

export default AnswerCheckbox;

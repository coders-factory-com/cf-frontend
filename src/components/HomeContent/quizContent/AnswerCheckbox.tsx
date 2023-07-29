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
		<div className='bg-white flex-col justify-start items-start gap-2 flex'>
			<div className='justify-start items-start gap-2 inline-flex'>
				<div className='w-5 h-5 relative bg-white'>
					<input disabled={submitted} required type='radio' id={uniqueId} checked={isChecked} onChange={() => onAnswerSelected(id)} />
				</div>
				<div className='py-px flex-col justify-start items-start inline-flex'>
					<label htmlFor={uniqueId} className={`${submitted ? 'text-neutral-500' : 'text-neutral-900'} text-sm font-normal leading-[18px] tracking-tight`}>
						{text}
					</label>
				</div>
			</div>
		</div>
	);
};

export default AnswerCheckbox;

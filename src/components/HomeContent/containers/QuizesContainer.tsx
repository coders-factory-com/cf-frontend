import QuizComponent from '../quizContent/QuizContainer';

function QuizesContainer() {
	return (
		<div className='ml-[10%] flex-col justify-start items-start flex w-full h-full '>
			<div className=' bg-white border w-full max-w-[1000px] h-full min-h-[1200px] px-6 border-neutral-200 flex-col justify-start items-start gap-6 flex'>
				{/* <section className=' border-b-[1px] w-full pb-12 border-gray-300'>
					<div className=' my-4 w-full text-black text-xl font-medium '>1. Intermediate operatorss</div>
					<div className=' text-neutral-700 text-sm font-normal leading-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </div>
					<div className='self-stretch w-full mt-8 py-4 bg-green-100 border border-green-600 border-l-4 border-opacity-30 justify-start items-start gap-4 inline-flex'>
						<AiFillCheckCircle className='text-green-600 text-xl ml-4' />
						<div className='text-neutral-900 text-sm font-bold leading-[18px] tracking-tight'>Good Answer</div>
					</div>
					<div className='mt-6 mb-2 text-neutral-700 text-sm font-normal leading-normal'>Your answers</div>
					{quizAnswers.map((quiz, index) => (
						<ReadOnlyCheckbox key={index} text={quiz.text} isChecked={quiz.isChecked} />
					))}
					<div className='mt-6 mb-2 text-neutral-700 text-sm font-normal leading-normal'>Good answers</div>
					{quizAnswers.map((quiz, index) => (
						<ReadOnlyCheckbox key={index} text={quiz.text} isChecked={quiz.isChecked} />
					))}
				</section> */}
				<QuizComponent />
			</div>
		</div>
	);
}

export default QuizesContainer;

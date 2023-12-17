import getData from '@/utils/getData';
import QuizComponent from '../quizContent/QuizContainer';
import ErrorMessage from '@/components/common/ErrorMessage';

const QuizesContainer = async () => {
  const quizData = await getData(`${process.env.BASE_URL}/api/quizes`);

  return (
    <>
      {quizData ? (
        <div className='ml-[10%] flex h-full w-full flex-col items-start justify-start '>
          <div className=' flex h-full min-h-[1200px] w-full max-w-[1000px] flex-col items-start justify-start gap-6 border border-neutral-200 bg-white px-6'>
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
            <QuizComponent quizData={quizData} />
          </div>
        </div>
      ) : (
        <ErrorMessage>Ups we have problem with fetch quizes please refresh page</ErrorMessage>
      )}
    </>
  );
};

export default QuizesContainer;

import { useState } from 'react';
import QuizTask from './QuizTask';
import { quizData } from '@/utils';
import Button from '@/common/Button';
import SuccessMessage from '@/common/SuccessMessage';
import ErrorMessage from '@/common/ErrorMessage';

const QuizContainer = () => {
	const [answers, setAnswers] = useState<{ [quizId: number]: { [taskId: number]: number } }>({});
	const [submitted, setSubmitted] = useState<{ [quizId: number]: boolean }>({});
	const [errors, setErrors] = useState<{ [quizId: number]: { [taskId: number]: string } }>({});
	const [score, setScore] = useState<{ [quizId: number]: number }>({});
	const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
	const quiz = quizData[currentQuizIndex];

	const handleSelectAnswer = (quizId: number, taskId: number, answerId: number) => {
		setAnswers(prev => ({
			...prev,
			[quizId]: {
				...(prev[quizId] || {}),
				[taskId]: answerId,
			},
		}));
		setErrors(prev => {
			let newErrors = { ...prev };
			if (newErrors[quizId] && newErrors[quizId][taskId]) {
				delete newErrors[quizId][taskId];
			}
			return newErrors;
		});
	};
	const handleNextQuiz = () => {
		window.scrollTo(0, 0);
		setCurrentQuizIndex(prev => prev + 1);
	};

	const validateAnswers = (quizId: number) => {
		let validationErrors: { [quizId: number]: { [taskId: number]: string } } = {};

		quizData.forEach(quiz => {
			if (quiz.quizId === quizId) {
				quiz.tasks.forEach(task => {
					if (!answers[quiz.quizId] || !answers[quiz.quizId][task.id]) {
						validationErrors = {
							...validationErrors,
							[quiz.quizId]: {
								...(validationErrors[quiz.quizId] || {}),
								[task.id]: 'Answer is required',
							},
						};
					}
				});
			}
		});

		setErrors(prev => ({ ...prev, ...validationErrors }));
		if (Object.keys(validationErrors).length === 0) {
			calculateScore(quizId);
			setSubmitted(prev => ({ ...prev, [quizId]: true }));
		}
	};

	const calculateScore = (quizId: number) => {
		let totalTasks = 0;
		let correctAnswers = 0;

		quizData.forEach(quiz => {
			if (quiz.quizId === quizId) {
				totalTasks += quiz.tasks.length;

				quiz.tasks.forEach(task => {
					if (answers[quiz.quizId] && answers[quiz.quizId][task.id] === task.correctAnswerId) {
						correctAnswers += 1;
					}
				});
			}
		});

		const percentageScore = (correctAnswers / totalTasks) * 100;
		setScore(prev => ({ ...prev, [quizId]: percentageScore }));
	};

	const handleSubmit = (quizId: number) => {
		validateAnswers(quizId);
	};

	return (
		<>
			{quiz && (
				<>
					<section className='w-full'>
						<div className='text-neutral-700 text-2xl mt font-bold leading-normal'>
							{quiz.quizId}. {quiz.quizTitle}
						</div>
						{quiz.tasks.map((task: any, taskIndex) => (
							<QuizTask quizId={quiz.quizId} key={taskIndex} task={task} errors={errors} selectedAnswer={(answers[quiz.quizId] || {})[task.id]} onAnswerSelected={answerId => handleSelectAnswer(quiz.quizId, task.id, answerId)} submitted={submitted[quiz.quizId]} />
						))}
					</section>
					{submitted[quiz.quizId] && (
						<div className='border-b-[1px] w-full pb-12 border-gray-300'>
							<div className='my-4 w-full text-black text-xl font-medium'>Summary</div>
							{score[quiz.quizId] >= 50 ? <SuccessMessage>Success {score[quiz.quizId]}% good questions</SuccessMessage> : <ErrorMessage>Failure {score[quiz.quizId]}% good questions</ErrorMessage>}
						</div>
					)}

					<div className='flex self-end'>
						<Button variant='primary' type='button' text='Submit' addedClassName='mr-6' onClick={() => handleSubmit(quiz.quizId)} />
						{currentQuizIndex < quizData.length - 1 && <Button variant='primary' type='submit' disabled={!submitted[quiz.quizId]} text='Next Quiz' onClick={handleNextQuiz} />}
					</div>
				</>
			)}
		</>
	);
};

export default QuizContainer;

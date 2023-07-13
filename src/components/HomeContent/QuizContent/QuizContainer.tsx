import React, { useState } from 'react';
import QuizTask from './QuizTask';
import { quizData } from '@/utils';
import { AiFillCheckCircle } from 'react-icons/ai';
import Button from '@/common/Button';

const QuizComponent = () => {
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
	};
	const handleNextQuiz = () => {
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
			setSubmitted(prev => ({ ...prev, [quizId]: true }));
			calculateScore(quizId);
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
							<div className='self-stretch w-full py-4 bg-green-100 border border-green-600 border-l-4 border-opacity-30 justify-start items-start gap-4 inline-flex'>
								<AiFillCheckCircle className='text-green-600 text-xl ml-4' />
								<div className='text-neutral-900 text-sm font-bold leading-[18px] tracking-tight'>Success {score[quiz.quizId]}% good questions</div>
							</div>
						</div>
					)}
					<div className='flex self-end'>
						<Button type='button' text='Submit' onClick={() => handleSubmit(quiz.quizId)} />
						{currentQuizIndex < quizData.length - 1 && (
							<button disabled={!submitted[quiz.quizId]} className=' disabled:opacity-60 font-bold my-4 hover:bg-white border w-24 bg-blue-600 py-4 text-center cursor-pointer hover:text-blue-600 text-[14px] font-normalbg-blue-600 text-white transition-colors duration-300 ease-in-out leading-none tracking-wide' onClick={handleNextQuiz}>
								Next Quiz
							</button>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default QuizComponent;
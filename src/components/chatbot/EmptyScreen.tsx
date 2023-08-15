import { UseChatHelpers } from 'ai/react';
import Button from '../common/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const exampleMessages = [
	{
		heading: 'Explain technical concepts',
		message: `What is a "serverless function"?`,
	},
	{
		heading: 'Summarize an article',
		message: 'Summarize the following article for a 2nd grader: \n',
	},
	{
		heading: 'Draft an email',
		message: `Draft an email to my boss about the following: \n`,
	},
];
interface EmptyScreenProps {
	setInput: (input: string) => void;
}

export function EmptyScreen({ setInput }: EmptyScreenProps) {
	return (
		<div className='mx-auto max-w-2xl px-4 relative '>
			<div className='rounded-lg border bg-background p-8'>
				<h1 className='mb-2 text-lg font-semibold'>Welcome to Coders-Factory, </h1>
				<p className='mb-2 leading-normal '>This is your virtual assistant.</p>
				<p className='leading-normal'>You can start a conversation here or try the following examples:</p>
				<div className='mt-4 flex flex-col items-start space-y-2'>
					{exampleMessages.map((message, index) => (
						<Button
							key={index}
							variant='secondary'
							text={
								<div className='flex'>
									<BsArrowUpRightCircleFill className='mr-2 ' />
									{message.heading}
								</div>
							}
							addedClassName='h-auto !my-1 text-base'
							onClick={() => setInput(message.message)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

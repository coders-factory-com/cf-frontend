'use client';
import { useChat, type Message } from 'ai/react';
import { ComponentProps, useState } from 'react';
import { toast } from 'react-hot-toast';
import { EmptyScreen } from './EmptyScreen';
import { ChatList } from './ChatList';
import { ChatPanel } from './ChatPanel';
import { VscHubot } from 'react-icons/vsc';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsFullScreen, toggleFullScreen } from '@/redux/screenSlice';
import { BiFullscreen } from 'react-icons/bi';

export interface ChatProps extends ComponentProps<'div'> {
	initialMessages?: Message[];
	id?: string;
}

export function Chat({ id, initialMessages }: ChatProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const isFullScreen = useSelector(selectIsFullScreen);

	const { messages, append, reload, stop, isLoading, input, setInput } = useChat({
		initialMessages,

		onResponse(response) {
			if (response.status === 401) {
				toast.error(response.statusText);
			}
		},
	});
	return (
		<>
			<div className={` ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'} transition-all duration-1000  ease-cubic  z-50 bg-white rounded-lg fixed py-4 border-[1px] shadow-lg ${isFullScreen ? 'w-full h-full right-0 bottom-0' : 'md:w-[440px] w-full h-auto md:right-4 md:bottom-8 bottom-0'} `}>
				<AiFillCloseCircle className='cursor-pointer absolute top-4 right-4 hover:fill-red-500 rounded-full text-2xl z-10' onClick={() => setIsOpen(prev => !prev)} />
				<BiFullscreen className='cursor-pointer absolute top-4 left-4 md:block hidden text-black rounded-full text-2xl z-10' onClick={() => dispatch(toggleFullScreen())} />
				<div className={`mb-14 mt-8  ${!messages.length ? '' : 'border-t-2 border-b-2'}`}>
					{messages.length ? (
						<div className={` mx-auto ${isFullScreen ? 'w-3/4 ' : 'md:max-w-[400px] max-w-none '}  mx-auto`}>
							<ChatList messages={messages} />
						</div>
					) : (
						<EmptyScreen setInput={setInput} />
					)}
				</div>
				<ChatPanel isLoading={isLoading} stop={stop} append={append} reload={reload} messages={messages} input={input} setInput={setInput} />
			</div>
			<VscHubot onClick={() => setIsOpen(prev => !prev)} className={` ${isOpen ? 'opacity-0 pointer-events-none delay-0' : 'opacity-100 delay-1000'} cursor-pointer transition-all duration-300 ease-in-out border-2 shadow-lg  z-50 fixed right-2 md:right-8 md:bottom-8 bottom-2 text-4xl md:text-5xl bg-white rounded-full p-1 md:p-2`} />
			{/* <div>
				<div>
					<div>
						<div>Enter your OpenAI Key</div>
						<div>
							If you have not obtained your OpenAI API key, you can do so by
							<Link href='https://platform.openai.com/signup/' className='underline'>
								signing up
							</Link>
							on the OpenAI website. This is only necessary for preview environments so that the open source community can test the app. The token will be saved to your browser&apos;s local storage under the name <code className='font-mono'>ai-token</code>.
						</div>
					</div>
					<input value={previewTokenInput} placeholder='OpenAI API key' onChange={e => setPreviewTokenInput(e.target.value)} />
					<footer className='items-center'>
						<button
							onClick={() => {
								setPreviewToken(previewTokenInput);
							}}>
							Save Token
						</button>
					</footer>
				</div>
			</div> */}
		</>
	);
}

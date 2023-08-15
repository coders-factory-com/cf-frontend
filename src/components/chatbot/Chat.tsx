'use client';
import { useChat, type Message } from 'ai/react';
import { ComponentProps, useState } from 'react';
import { toast } from 'react-hot-toast';
import { EmptyScreen } from './EmptyScreen';
import { ChatList } from './ChatList';
import { ChatPanel } from './ChatPanel';
import { VscHubot } from 'react-icons/vsc';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFullScreen, toggleFullScreen } from '@/redux/screenSlice';

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
			<div className={` ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'} transition-all duration-1000  ease-cubic   z-50 bg-white rounded-lg fixed right-4 bottom-8 h-fit py-4 border-[1px] shadow-lg ${isFullScreen ? 'w-full h-full' : 'w-[440px]'} `}>
				<AiOutlineCloseCircle className='cursor-pointer absolute top-4 right-4 hover:bg-red-500 rounded-full text-2xl z-10' onClick={() => setIsOpen(prev => !prev)} />
				<BsArrowsFullscreen className='cursor-pointer absolute top-4 left-4 rounded-full text-2xl z-10' onClick={() => dispatch(toggleFullScreen())} />
				<div className={'pb-14 pt-8  '}>
					{messages.length ? (
						<div className='max-w-[400px]'>
							<ChatList messages={messages} />
						</div>
					) : (
						<EmptyScreen setInput={setInput} />
					)}
				</div>
				<ChatPanel isLoading={isLoading} stop={stop} append={append} reload={reload} messages={messages} input={input} setInput={setInput} />
			</div>
			<VscHubot onClick={() => setIsOpen(prev => !prev)} className={` ${isOpen ? 'opacity-0 pointer-events-none delay-0' : 'opacity-100 delay-1000'} cursor-pointer transition-all duration-300 ease-in-out border-2 shadow-lg  z-50 fixed right-8 bottom-8 text-5xl bg-white rounded-full p-2`} />
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

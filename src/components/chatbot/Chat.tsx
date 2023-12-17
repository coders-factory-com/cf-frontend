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

export function Chat({ initialMessages }: ChatProps) {
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
      <div
        className={` ${
          isOpen ? 'translate-x-0' : 'translate-x-[120%]'
        } fixed z-50  rounded-lg  border-[1px] bg-white py-4 shadow-lg transition-all duration-1000 ease-cubic ${
          isFullScreen ? 'bottom-0 right-0 h-full w-full' : 'bottom-0 h-auto w-full md:bottom-8 md:right-4 md:w-[440px]'
        } `}
      >
        <AiFillCloseCircle
          className='absolute right-4 top-4 z-10 cursor-pointer rounded-full text-2xl hover:fill-red-500'
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <BiFullscreen
          className='absolute left-4 top-4 z-10 hidden cursor-pointer rounded-full text-2xl text-black md:block'
          onClick={() => dispatch(toggleFullScreen())}
        />
        <div className={`mb-14 mt-8  ${!messages.length ? '' : 'border-b-2 border-t-2'}`}>
          {messages.length ? (
            <div className={` mx-auto ${isFullScreen ? 'w-3/4 ' : 'max-w-none md:max-w-[400px] '}  mx-auto`}>
              <ChatList messages={messages} />
            </div>
          ) : (
            <EmptyScreen setInput={setInput} />
          )}
        </div>
        <ChatPanel
          isLoading={isLoading}
          stop={stop}
          append={append}
          reload={reload}
          messages={messages}
          input={input}
          setInput={setInput}
        />
      </div>
      <VscHubot
        onClick={() => setIsOpen((prev) => !prev)}
        className={` ${
          isOpen ? 'pointer-events-none opacity-0 delay-0' : 'opacity-100 delay-1000'
        } fixed bottom-2 right-2 z-50 cursor-pointer rounded-full  border-2 bg-white p-1 text-4xl shadow-lg transition-all duration-300 ease-in-out md:bottom-8 md:right-8 md:p-2 md:text-5xl`}
      />
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

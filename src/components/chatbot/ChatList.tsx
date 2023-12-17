import { type Message } from 'ai';
import { ChatMessage } from './ChatMessage';
import { selectIsFullScreen } from '@/redux/screenSlice';
import { useSelector } from 'react-redux';

export interface ChatList {
  messages: Message[];
}

export function ChatList({ messages }: ChatList) {
  const isFullScreen = useSelector(selectIsFullScreen);
  if (!messages.length) {
    return null;
  }

  return (
    <div
      className={`scrollable relative  mx-1 my-6 max-h-[60vh] overflow-y-auto px-2  ${
        isFullScreen ? 'h-full w-full' : 'w-full md:min-h-[30vh] md:w-[400px]'
      } `}
    >
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && <hr className='my-4 md:my-8' />}
        </div>
      ))}
    </div>
  );
}

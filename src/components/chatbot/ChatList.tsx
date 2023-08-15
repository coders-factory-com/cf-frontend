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
		<div className={`relative mx-1  px-2 max-h-[60vh]  scrollable overflow-y-auto  ${isFullScreen ? 'w-full h-full' : 'min-h-[30vh] w-[400px]'} `}>
			{messages.map((message, index) => (
				<div key={index}>
					<ChatMessage  message={message} />
					{index < messages.length - 1 && <hr className='my-4 md:my-8' />}
				</div>
			))}
		</div>
	);
}

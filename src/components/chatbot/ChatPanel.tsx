import { type UseChatHelpers } from 'ai/react';
import { PromptForm } from './ChatForm';
import Button from '../common/Button';
import { BiRefresh, BiStop } from 'react-icons/bi';

export interface ChatPanelProps extends Pick<UseChatHelpers, 'append' | 'isLoading' | 'reload' | 'messages' | 'stop' | 'input' | 'setInput'> {
	id?: string;
}

export function ChatPanel({ isLoading, stop, append, reload, input, setInput, messages }: ChatPanelProps) {
	return (
		<div className='mx-auto sm:max-w-2xl sm:px-4'>
			<div className='flex h-10 items-center justify-center'>
				{isLoading ? (
					<Button
						variant='secondary'
						text={
							<div className='flex'>
								<BiStop className='mr-2' />
								Stop generating
							</div>
						}
						addedClassName='!mb-12'
						onClick={() => stop()}
					/>
				) : (
					messages?.length > 0 && (
						<Button
							variant='secondary'
							text={
								<div className='flex items-center justify-center'>
									<BiRefresh className='mr-2 text-xl' />
									Regenerate response
								</div>
							}
							addedClassName='!mb-12'
							onClick={() => reload()}
						/>
					)
				)}
			</div>
			<PromptForm
				onSubmit={async value => {
					await append({
						content: value,
						role: 'user',
					});
				}}
				input={input}
				setInput={setInput}
				isLoading={isLoading}
			/>
		</div>
	);
}

'use client';
import { UseChatHelpers } from 'ai/react';
import Textarea from 'react-textarea-autosize';
import { useEnterSubmit } from '@/customHooks/useEnterSubmit';
import { useRouter } from 'next/navigation';
import { AiOutlineEnter } from 'react-icons/ai';
import { useEffect, useRef } from 'react';

export interface PromptProps extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => Promise<void>;
  isLoading: boolean;
}

export function PromptForm({ onSubmit, input, setInput, isLoading }: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!input?.trim()) {
          return;
        }
        setInput('');
        await onSubmit(input);
      }}
      ref={formRef}
    >
      <div className='mx-4 md:mx-0'>
        <div className=' bg-background relative flex max-h-60 w-full flex-col overflow-hidden rounded-lg border px-4 sm:rounded-md sm:px-12'>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.refresh();
            }}
            className='bg-background absolute left-0 top-4 h-8 w-8 rounded-full p-0 sm:left-4'
          >
            <span className='sr-only text-black'>New Chat</span>
          </button>

          <Textarea
            ref={inputRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Send a message.'
            spellCheck={false}
            className='scrollable max-h-[120px] min-h-[60px]  w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm md:max-h-none'
          />
          <div className='absolute right-0  top-4 sm:right-4'>
            <AiOutlineEnter className=' border-2 text-3xl font-bold text-black' />
            <button
              type='submit'
              disabled={isLoading || input === ''}
              className='bg-background h-8 w-8 rounded-full p-0'
            >
              <span className='sr-only'>Send message</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

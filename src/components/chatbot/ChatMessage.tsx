import { Message } from 'ai';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { MemoizedReactMarkdown } from './MemoizedReactMarkdown';
import clsx from 'clsx';
import { FaUserAlt } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { CodeBlock } from './CodeBlock';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export interface ChatMessageProps {
  message: Message;
}

interface Session {
  data: {
    user?: {
      image: string;
      name: string;
    };
  };
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  const { data: session } = useSession() as Session;

  return (
    <div className={clsx(' mb-4 flex w-full items-start justify-center')} {...props}>
      <div
        className={clsx(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
          message.role === 'user' ? 'bg-black' : 'bg-white '
        )}
      >
        {message.role === 'user' ? (
          session?.user?.image ? (
            <Image src={session.user.image} width={100} height={100} alt={session.user.name || 'user photo'} />
          ) : (
            <FaUserAlt className='text-white' />
          )
        ) : (
          <SiOpenai />
        )}
      </div>
      <div className='ml-1 flex-1 space-y-2 px-1 md:ml-4 '>
        <MemoizedReactMarkdown
          className=' w-full whitespace-pre-wrap'
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className='mb-2 w-full whitespace-pre-wrap last:mb-0'>{children}</p>;
            },
            code({ inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return <span className='mt-1 animate-pulse cursor-default'>▍</span>;
                }

                children[0] = (children[0] as string).replace('`▍`', '▍');
              }

              const match = /language-(\w+)/.exec(className || '');

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              );
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
      </div>
    </div>
  );
}

import { PropsWithChildren } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`mt-8 inline-flex w-full items-start justify-start gap-4 self-stretch border-l-4 border-red-600 border-opacity-30 bg-red-100 py-4`}
    >
      <AiFillCloseCircle className='ml-4 text-xl text-red-600' />
      <div className='text-sm font-bold leading-[18px] tracking-tight text-neutral-900'>{children}</div>
    </div>
  );
};

export default ErrorMessage;

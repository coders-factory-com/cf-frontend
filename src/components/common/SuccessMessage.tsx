import { PropsWithChildren } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const SuccessMessage = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`mt-8 inline-flex w-full items-start justify-start gap-4 self-stretch border-l-4 border-green-600 border-opacity-30 bg-green-100 py-4`}
    >
      <AiFillCheckCircle className='ml-4 text-xl text-green-600' />
      <div className='text-sm font-bold leading-[18px] tracking-tight text-neutral-900'>{children}</div>
    </div>
  );
};

export default SuccessMessage;

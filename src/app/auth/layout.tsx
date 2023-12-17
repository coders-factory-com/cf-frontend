import FormHeader from '@/components/FormHeader';
import { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className='flex h-screen w-screen items-start justify-center bg-neutral-50'>
      <div className='w-full max-w-[500px] px-4 text-base lg:text-lg xl:px-0'>
        <FormHeader />
        <div className='bg-white pb-8 shadow-lg'>{children}</div>
      </div>
    </div>
  );
}

import UserContentNavigation from '@/components/wrappers/UserContentNavigation';
import { PropsWithChildren } from 'react';

export default function UserContentLayout({ children }: PropsWithChildren) {
  return (
    <main className='relative left-[191px] w-[calc(100%-191px)] '>
      <UserContentNavigation />
      {children}
    </main>
  );
}

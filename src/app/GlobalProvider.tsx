'use client';
import { store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

const GlobalProvider = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default GlobalProvider;

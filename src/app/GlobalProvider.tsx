'use client';
import { store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

function GlobalProvider({ children }: { children: ReactNode }) {
	return (
		<SessionProvider>
			<Provider store={store}>{children}</Provider>
		</SessionProvider>
	);
}

export default GlobalProvider;

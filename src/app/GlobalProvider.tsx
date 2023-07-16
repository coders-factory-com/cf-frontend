'use client';
import { store } from '@/redux/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

function GlobalProvider({ children }: { children: ReactNode }) {
	return <Provider store={store}>{children}</Provider>;
}

export default GlobalProvider;

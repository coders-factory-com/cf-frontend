import './globals.css';
import type { Metadata } from 'next';
import GlobalProvider from './GlobalProvider';
import NextTopLoader from 'nextjs-toploader';
import { PropsWithChildren } from 'react';
import { Chat } from '@/components/chatbot/Chat';

export const metadata: Metadata = {
	title: 'Coders-Factory',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				<GlobalProvider>
					<NextTopLoader showSpinner={false} />
                    <Chat />
					{children}
				</GlobalProvider>
			</body>
		</html>
	);
}

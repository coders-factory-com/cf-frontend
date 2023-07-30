import './globals.css';
import type { Metadata } from 'next';
import GlobalProvider from './GlobalProvider';

export const metadata: Metadata = {
	title: 'Coders-Factory',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<GlobalProvider>{children}</GlobalProvider>
			</body>
		</html>
	);
}

import { type Metadata } from 'next';
import { redirect } from 'next/navigation';

import { getSession } from 'next-auth/react';
import { Chat } from './Chat';

export const runtime = 'edge';
export const preferredRegion = 'home';

export async function generateMetadata(): Promise<Metadata> {
	const session = await getSession();

	if (!session?.user) {
		return {};
	}

	return {
		title: 'Chat',
	};
}

export default async function ChatPage() {
	const session = await getSession();

	if (!session?.user) {
		redirect(`/`);
	}

	return <Chat />;
}

'use client';
import NavigationBreadcrumb from '@/components/HomeContent/breadcrumb/NavigationBreadcrumb';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function UserContentLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isHome = pathname.startsWith('/home');
	return (
		<main>
			<Sidebar />

			{isHome && <NavigationBreadcrumb />}
			{children}
		</main>
	);
}

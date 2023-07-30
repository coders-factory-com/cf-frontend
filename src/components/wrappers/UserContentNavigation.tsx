'use client';

import NavigationBreadcrumb from '@/components/HomeContent/breadcrumb/NavigationBreadcrumb';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';

const UserContentNavigation = () => {
	const pathname = usePathname();
	const isHome = pathname.startsWith('/home');
	return (
		<>
			<Sidebar />
			{isHome && <NavigationBreadcrumb />}
		</>
	);
};

export default UserContentNavigation;

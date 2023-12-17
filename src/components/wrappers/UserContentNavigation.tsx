'use client';

import NavigationBreadcrumb from '@/components/HomeContent/breadcrumb/NavigationBreadcrumb';
import Sidebar from '@/components/Sidebar';
import { Navigation } from '@/enums/navigation.enum';
import { usePathname } from 'next/navigation';

const UserContentNavigation = () => {
  const pathname = usePathname();
  const isHome = pathname.startsWith(Navigation.Home);
  return (
    <>
      <Sidebar />
      {isHome && <NavigationBreadcrumb />}
    </>
  );
};

export default UserContentNavigation;

'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Breadcrumb from '@/components/HomeContent/breadcrumb/Breadcrumb';

export default function NavigationBreadcrumb() {
	const pathname = usePathname();
	const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);
	const router = useRouter();

	useEffect(() => {
		if (pathname) {
			const linkPath = pathname.split('/');
			linkPath.shift();
			const pathArray = linkPath.map((path, i) => {
				return {
					text: path,
					href: `/${linkPath.slice(0, i + 1).join('/')}`,
				};
			});

			setBreadcrumbs(pathArray);
		}
	}, [pathname]);

	const handleClick = (index: number) => {
		router.push(breadcrumbs[index].href);
	};

	return (
		<div>
			{breadcrumbs.map((breadcrumb, index) => (
				<Breadcrumb key={index} handleClick={() => handleClick(index)} index={index} text={breadcrumb.text} />
			))}
		</div>
	);
}

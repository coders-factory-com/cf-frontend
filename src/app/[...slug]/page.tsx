'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Page() {
	const router = useRouter();
	const pathname = usePathname();

	return <div className='w-[calc(100%-191px)] left-[191px] h-full relative p-8 bg-neutral-50'>Dashboard</div>;
}

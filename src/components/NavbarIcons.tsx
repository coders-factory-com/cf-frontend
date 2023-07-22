'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarIcons = ({ iconSrc, text, path }: NavbarIconsProps) => {
	const pathname = usePathname();
	const isActive = pathname.startsWith(path);

	return (
		<>
			<Link href={path} className={`self-stretch h-[70px] px-5 justify-start items-center gap-3 flex ${isActive ? 'bg-[#333232]' : 'bg-transparent'}`}>
				<Image height={20} width={20} alt='' src={iconSrc} />
				<div className='text-white text-[12px] font-medium'>{text}</div>
			</Link>

			<div className='w-full bg-[#383838] h-[1px]' />
		</>
	);
};
export default NavbarIcons;

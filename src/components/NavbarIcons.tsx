'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarIconsProps {
  iconSrc: string;
  text: string;
  path: string;
}

const NavbarIcons = ({ iconSrc, text, path }: NavbarIconsProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(path);

  return (
    <>
      <Link
        href={path}
        className={`flex h-[70px] items-center justify-start gap-3 self-stretch px-5 ${
          isActive ? 'bg-[#333232]' : 'bg-transparent'
        }`}
      >
        <Image height={20} width={20} alt='' src={iconSrc} />
        <div className='text-[12px] font-medium text-white'>{text}</div>
      </Link>
      <div className='h-[1px] w-full bg-[#383838]' />
    </>
  );
};
export default NavbarIcons;

'use client';
import { Navigation } from '@/enums/navigation.enum';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './common/Button';
import { usePathname, useRouter } from 'next/navigation';
import { links } from '@/utils';

const LandingPageNavigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { push } = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav>
			<ul style={isScrolled ? { backgroundImage: `url('noise-bg.png')`, backgroundColor: 'rgba(9, 16, 35, 1)', transition: 'background 0.3s ease-in-out', borderBottom: '1px solid #202b3c' } : { background: 'transparent', transition: 'background 0.2s ease-out' }} className='!z-[2] flex justify-between h-fit items-center fixed w-full px-[5%] text-white'>
				<li className='text-2xl font-bold text-center'>
					<Link className='flex items-center justify-center' href={Navigation.Main}>
						<div className='p-0.5 mr-1 bg-white rounded justify-center h-fit items-center gap-2.5 flex'>
							<div className='text-black text-[14px] font-semibold leading-none tracking-wide'>&lt;/&gt;</div>
						</div>
						Coders-Factory
					</Link>
				</li>
				<div className='flex space-x-4 items-center'>
					{links.map(link => (
						<li key={link.path} className='relative hover:text-gray-400'>
							<Link href={link.path}>{link.label}</Link>
							<div className={` ${pathname.startsWith(link.path) ? ' scale-x-100' : ' scale-x-0'} border-b-green-600 border-b-[1px] absolute bottom-0  w-full origin-center  delay-500 transition-all duration-300 ease-in-out `}></div>
						</li>
					))}
					<Button variant='secondary' addedClassName='my-1 !py-3' text='Sign Up' onClick={() => push(Navigation.AuthLogin)} />
				</div>
			</ul>
		</nav>
	);
};

export default LandingPageNavigation;

'use client';
import { Navigation } from '@/enums/navigation.enum';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './common/Button';
import { usePathname, useRouter } from 'next/navigation';
import { links } from '@/utils';

const LandingPageNavigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { push } = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
				setIsMenuOpen(false);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav>
			<ul style={isScrolled || isMenuOpen ? { backgroundImage: "url('noise-bg.png')", backgroundColor: 'rgba(9, 16, 35, 1)', transition: 'background 0.3s ease-in-out', borderBottom: '1px solid #202b3c' } : { background: 'transparent', transition: 'background 0.2s ease-out' }} className='!z-[2] py-2 flex justify-between h-fit items-center fixed w-full px-[5%] text-white'>
				<li className='text-xl md:text-2xl font-bold text-center'>
					<Link className='flex items-center justify-center' href={Navigation.Main}>
						<div className='p-0.5 mr-1 bg-white rounded justify-center h-fit items-center gap-2.5 flex'>
							<div className='text-black text-[14px] font-semibold leading-none tracking-wide'>&lt;/&gt;</div>
						</div>
						Coders-Factory
					</Link>
				</li>
				<div className='md:hidden z-50'>
					<button onClick={() => setIsMenuOpen(prev => !prev)}>
						<div className={`h-0.5 w-6 top-0 mb-1.5 bg-white relative ${isMenuOpen ? 'transform rotate-45 top-4' : ''} transition-all duration-300 ease-in-out`}></div>
						<div className={`h-0.5 w-6 mb-1.5 bg-white ${isMenuOpen ? 'opacity-0 -translate-x-12' : 'opacity-100 translate-x-0'} transition-all duration-300 ease-in-out`}></div>
						<div className={`h-0.5 w-6 bg-white ${isMenuOpen ? 'transform -rotate-45' : ''} transition-all duration-300 ease-in-out`}></div>
					</button>
				</div>
				<div
					style={isMenuOpen ? { backgroundImage: "url('noise-bg.png')", backgroundColor: 'rgba(9, 16, 35, 1)', transition: 'all 0.3s ease-in-out', borderBottom: '1px solid #202b3c', right: '0', top: '2.5rem', padding: '1rem' } : { background: 'transparent', transition: 'all 0.2s ease-out', right: '-8rem', top: '2.5rem', padding: '1rem' }}
					className={`flex flex-col absolute space-y-4 items-center md:!border-none md:!top-0 md:!right-0 md:!p-0 md:relative md:flex-row md:space-y-0 space-x-2 lg:space-x-4`}>
					{links.map(link => (
						<li key={link.path} className='relative hover:text-gray-400'>
							<Link href={link.path}>{link.label}</Link>
							<div className={` ${pathname.startsWith(link.path) ? ' scale-x-100' : ' scale-x-0'} border-b-green-600 border-b-[1px] absolute bottom-0 w-full origin-center delay-500 transition-all duration-300 ease-in-out `}></div>
						</li>
					))}
					<Button variant='secondary' addedClassName='my-1 !py-3' text='Sign Up' onClick={() => push(Navigation.AuthLogin)} />
				</div>
			</ul>
			<div className={`fixed inset-0 bg-black bg-opacity-50 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`} onClick={() => setIsMenuOpen(false)}></div>
		</nav>
	);
};

export default LandingPageNavigation;

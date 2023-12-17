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
      <ul
        className={`fixed !z-[2] flex h-fit w-full items-center justify-between !px-[5%] py-2 text-white transition-all duration-300  ${
          isScrolled || isMenuOpen
            ? ' border-b-[1px] border-b-stone-900  bg-deepSpace bg-noise '
            : 'border-none bg-transparent'
        }`}
      >
        <li className='text-center text-xl font-bold md:text-2xl'>
          <Link className='flex items-center justify-center' href={Navigation.Main}>
            <div className='mr-1 flex h-fit items-center justify-center gap-2.5 rounded bg-white p-0.5'>
              <div className='text-[14px] font-semibold leading-none tracking-wide text-black'>&lt;/&gt;</div>
            </div>
            Coders-Factory
          </Link>
        </li>
        <div className='z-50 md:hidden'>
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <div
              className={`relative top-0 mb-1.5 h-0.5 w-6 bg-white ${
                isMenuOpen ? 'top-2 rotate-45 transform' : ''
              } transition-all duration-300 ease-in-out`}
            ></div>
            <div
              className={`mb-1.5 h-0.5 w-6 bg-white ${
                isMenuOpen ? '-translate-x-12 opacity-0' : 'translate-x-0 opacity-100'
              } transition-all duration-300 ease-in-out`}
            ></div>
            <div
              className={`relative h-0.5 w-6 bg-white ${
                isMenuOpen ? '-top-2 -rotate-45 transform' : ''
              } transition-all duration-300 ease-in-out`}
            ></div>
          </button>
        </div>
        <div
          className={`flex transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'right-0 border-b-[1px] border-b-stone-900 bg-deepSpace bg-noise p-4'
              : '-right-32  bg-transparent  p-4'
          } absolute top-10 flex-col items-center space-x-2 space-y-4 md:relative md:!right-0 md:!top-0 md:flex-row md:space-y-0 md:!border-none md:!p-0 lg:space-x-4`}
        >
          {links.map((link) => (
            <li key={link.path} className='relative hover:text-gray-400'>
              <Link href={link.path}>{link.label}</Link>
              <div
                className={` ${
                  pathname.startsWith(link.path) ? ' scale-x-100' : ' scale-x-0'
                } absolute bottom-0 w-full origin-center border-b-[1px] border-b-green-600 transition-all delay-500 duration-300 ease-in-out `}
              ></div>
            </li>
          ))}
          <Button
            variant='secondary'
            addedClassName='my-1 !py-3  bg-gradient-to-r via-cyan-500 from-emerald-400 to-green-600 bg-size-200 bg-pos-0 hover:bg-pos-100'
            text='Sign Up'
            onClick={() => push(Navigation.AuthLogin)}
          />
        </div>
      </ul>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </nav>
  );
};

export default LandingPageNavigation;

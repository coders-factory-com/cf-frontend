import NavbarIcons from './NavbarIcons';
import { navbarIcons } from '@/utils';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import ContentLoader from 'react-content-loader';
import { Navigation } from '@/enums/navigation.enum';
import SearchBar from './SearchBar';

const Sidebar = () => {
  const { data: session, status } = useSession();
  return (
    <div className='fixed left-0 top-0 z-10 flex h-full w-[190px] flex-col items-start justify-between gap-[60px] bg-neutral-800'>
      <div className='h-[526px] self-stretch '>
        <div className='flex h-[104px] flex-col items-center justify-center gap-2.5 self-stretch bg-neutral-900 py-3'>
          <div className='flex h-20 w-[150px] items-center justify-start pr-[7px]'>
            <Link href={Navigation.Main} className='flex items-center justify-start gap-[11px]'>
              <div className='flex items-center justify-center gap-2.5 rounded bg-white p-0.5'>
                <div className='text-[14px] font-semibold leading-none tracking-wide text-black'>&lt;/&gt;</div>
              </div>
              <div className='whitespace-nowrap text-[14px] font-bold leading-none tracking-wide text-white'>
                Coders-Factory
              </div>
            </Link>
          </div>
        </div>
        <SearchBar />
        <nav className='flex h-[350px] flex-col items-start justify-center self-stretch'>
          {navbarIcons.map((icon, index) => (
            <NavbarIcons key={index} iconSrc={icon.iconSrc} text={icon.text} path={icon.path} />
          ))}
        </nav>
      </div>
      {status === 'loading' ? (
        <div className='flex  h-20 w-full items-center justify-center'>
          <ContentLoader
            speed={2}
            width='100%'
            height='100%'
            viewBox='-60 0 256 44'
            backgroundColor='#9d9b9b'
            foregroundColor='#ffffff'
          >
            <rect x='59' y='16' rx='3' ry='3' width='88' height='11' />
            <circle cx='20' cy='20' r='20' />
          </ContentLoader>
        </div>
      ) : (
        <Link href={Navigation.UserProfile} className=' flex h-20 items-center justify-center gap-3 self-stretch px-4'>
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || 'user photo'}
              height={28}
              width={28}
              className='inline-block rounded-full'
            />
          ) : (
            <Image
              height={28}
              width={28}
              className=' rounded-full border border-white object-contain'
              src='/Ellipse.png'
              alt='placeholder'
            />
          )}
          <div className='text-base font-medium text-white'> {session?.user?.name || 'User name'}</div>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;

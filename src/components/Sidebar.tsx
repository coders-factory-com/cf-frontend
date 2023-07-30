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
		<div className='w-[190px] z-10 h-full left-0 fixed top-0 bg-neutral-800 flex-col items-start justify-between gap-[60px] flex'>
			<div className='self-stretch h-[526px] '>
				<div className='self-stretch h-[104px] py-3 bg-neutral-900 flex-col justify-center items-center gap-2.5 flex'>
					<div className='w-[150px] h-20 pr-[7px] justify-start items-center flex'>
						<Link href={Navigation.Main} className='justify-start items-center gap-[11px] flex'>
							<div className='p-0.5 bg-white rounded justify-center items-center gap-2.5 flex'>
								<div className='text-black text-[14px] font-semibold leading-none tracking-wide'>&lt;/&gt;</div>
							</div>
							<div className='text-white text-[14px] font-bold leading-none whitespace-nowrap tracking-wide'>Coders-Factory</div>
						</Link>
					</div>
				</div>
				<SearchBar />
				<nav className='self-stretch h-[350px] flex-col justify-center items-start flex'>
					{navbarIcons.map((icon, index) => (
						<NavbarIcons key={index} iconSrc={icon.iconSrc} text={icon.text} path={icon.path} />
					))}
				</nav>
			</div>
			{status === 'loading' ? (
				<div className='w-full  flex justify-center items-center h-20'>
					<ContentLoader speed={2} width='100%' height='100%' viewBox='-60 0 256 44' backgroundColor='#9d9b9b' foregroundColor='#ffffff'>
						<rect x='59' y='16' rx='3' ry='3' width='88' height='11' />
						<circle cx='20' cy='20' r='20' />
					</ContentLoader>
				</div>
			) : (
				<Link href={Navigation.UserProfile} className=' self-stretch h-20 px-4 justify-center items-center gap-3 flex'>
					{session?.user?.image ? <Image src={session.user.image} alt={session.user.name || 'user photo'} height={28} width={28} className='inline-block rounded-full' /> : <Image height={28} width={28} className=' rounded-full border border-white object-contain' src='/Ellipse.png' alt='placeholder' />}
					<div className='text-white text-base font-medium'> {session?.user?.name || 'User name'}</div>
				</Link>
			)}
		</div>
	);
};

export default Sidebar;

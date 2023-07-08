import Image from 'next/image';

interface NavbarIconsProps {
	iconSrc: string;
	text: string;
}

const NavbarIcons = ({ iconSrc, text }: NavbarIconsProps) => (
	<>
		<div className='self-stretch h-[70px] px-5 justify-start items-center gap-3 inline-flex'>
			<Image height={20} width={20} alt='' src={iconSrc} />
			<div className='text-white text-[12px] font-medium'>{text}</div>
		</div>
		<div className='w-full bg-[#383838] h-[1px]' />
	</>
);

export default NavbarIcons;

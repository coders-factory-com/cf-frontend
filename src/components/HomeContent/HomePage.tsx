'use client';
import Button from '@/components/common/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/enums/navigation.enum';
import { MAIN_PAGE_PHOTOS } from '@/constants/mian-page.constant';
import Link from 'next/link';

const HomePage = () => {
	const { push } = useRouter();

	return (
		<main
			style={{
				backgroundImage: `url('noise-bg.png'), linear-gradient(225deg, rgba(19, 53, 52, 1) 15%, rgba(9, 16, 35, 1) 40%)`,
			}}
			className=' max-w-[100vw]  min-h-screen h-full  text-white'>
			<div className='h-full relative px-8 pl-32 '>
				<nav>
					<ul className='flex justify-between items-center'>
						<li className='text-2xl font-bold text-center'>
							<Link href={Navigation.Main}>Coders-Factory</Link>
						</li>
						<div className='flex space-x-4 items-center'>
							<li>
								<Link href={Navigation.Courses}>Course Library</Link>
							</li>
							<li>
								<Link href={Navigation.Resources}>Resources</Link>
							</li>
							<li>
								<Link href={Navigation.Community}>Community</Link>
							</li>
							<li>
								<Link href={Navigation.Challenges}>Challenges</Link>
							</li>
							<Button variant='secondary' text='Sign Up' onClick={() => push(Navigation.AuthLogin)} />
						</div>
					</ul>
				</nav>
				<section className='text-6xl mt-12 flex justify-between'>
					<div className='w-1/2'>
						<p>
							Start Learning <br /> <span className='font-thin text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'> &lt; Web Development &gt;</span> <br /> Right Now
						</p>
						<p className='text-gray-500 font-medium  text-lg w-1/3 whitespace-pre-wrap mt-4'>
							Join our coding community and learn new skills with over 50 quizes and tasks across dozens of topics <br />
						</p>
						<Button text='Get Started' variant='primary' />
					</div>
					<div className='relative'>
						<Image alt='code landing page' width={500} height={200} className='object-fill w-3/4 shadow-md shadow-blue-700' src='/code-landing-page.png' />
					</div>
				</section>
				<div className='w-full justify-evenly flex'>
					<div className='flex justify-evenly my-8 flex-wrap  w-[800px]'>
						{MAIN_PAGE_PHOTOS.map((photo, index) => (
							<Image alt='' width={400} height={400} key={index} className='object-contain w-1/2 p-1' src={photo.image} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;

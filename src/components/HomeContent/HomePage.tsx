/* eslint-disable react/jsx-no-comment-textnodes */

import Image from 'next/image';
import { MAIN_PAGE_PHOTOS } from '@/constants/mian-page.constant';
import { BiLogoAirbnb, BiLogoMicrosoft, BiLogoSpotify } from 'react-icons/bi';
import HexagonIcon from '../common/HexagonIcon';
import { technologies } from '@/utils';
import { Navigation } from '@/enums/navigation.enum';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div className='h-full relative  lg:px-8  lg:pl-32 '>
			<section className='xl:text-6xl lg:text-5xl text-4xl  pt-28 w-full px-[5%] '>
				<div className='flex md:flex-row  flex-col justify-center items-center'>
					<div className='md:w-1/2 md:mb-0 mb-8'>
						<p>
							Start Learning <br /> <span className='font-thin text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'> &lt; Web Development &gt;</span> <br /> Right Now
						</p>
						<p className='text-gray-500 font-medium  text-lg  whitespace-pre-wrap mt-4'>
							Join our coding community and learn new <br /> skills with over 50 quizes and tasks across dozens <br /> of topics <br />
						</p>
						<Link href={Navigation.AuthSignUp} className='text-lg px-8 py-3 font-semibold bg-blue-700 rounded-lg hover:opacity-70 transition-opacity duration-300 ease-in-out'>
							Get Started
						</Link>
					</div>
					<div className='relative'>
						<Image alt='code landing page' width={500} height={200} className='object-fill shadow-md shadow-blue-700' src='/code-landing-page.png' />
					</div>
				</div>
				<div className='flex w-full flex-col md:flex-row justify-evenly  mt-12 mb-8'>
					<div className='md:w-1/2 flex flex-col justify-center'>
						<h3>Join the Success</h3>
						<p className='text-gray-600 text-lg mt-4'>Since 2023, we have been instrumental in shaping the careers of more than 1,000 coders. Our members have successfully landed jobs at some of the most prestigious tech companies in the industry. With a commitment to excellence and a passion for continuous learning, we provide the necessary tools and guidance to help you thrive in your tech career.</p>
					</div>
					<div className='flex justify-center items-center mt-8 md:mt-0'>
						<div
							style={{
								backgroundImage: `url('noise-bg.png')`,
								backgroundColor: 'rgba(9, 16, 35, 1)',
							}}
							className='text-lg py-4 w-fit h-fit rounded-lg border-2 border-gray-800 shadow-md shadow-blue-800 flex flex-col justify-center items-center'>
							<p className='text-gray-600 text-sm px-4'>
								// since 2023, more than 1,000 Coders <br /> members have gotten job at tech companies //
							</p>
							<hr className='w-full my-4 border-t-gray-800 border-t-2' />
							<div className='flex space-x-4 justify-between w-full px-4 '>
								<div className='flex items-center justify-center'>
									<BiLogoMicrosoft className='mr-1' />
									Microsoft
								</div>
								<div className='flex items-center justify-center'>Google</div>
								<div className='flex items-center justify-center'>
									<BiLogoAirbnb className='mr-1' /> Airbnb
								</div>
								<div className='flex items-center justify-center'>
									<BiLogoSpotify className='mr-1' /> Spotify
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex md:flex-row flex-col w-full'>
					<div className='md:w-1/2 flex justify-center md:mr-12 lg:mr-2 '>
						<div className='grid grid-cols-3 w-fit'>
							{technologies.map((tech, index) => (
								<div key={index} className={`flex relative w-fit justify-center items-center ${index <= 2 ? 'top-4 left-12' : index >= 6 ? '-top-4 left-12' : '!top-0 !left-0'}`}>
									<HexagonIcon color={tech.color} backgroundColor={tech.backgroundColor} IconComponent={tech.IconComponent} />
								</div>
							))}
						</div>
					</div>
					<div className='md:w-1/2 flex flex-col justify-center'>
						<h3>Learn</h3>
						<p className='text-gray-600 text-lg mt-4'>All our devcelopers are mentors who have veen hand-picked for their technical skills and passions for teaching. Our missions is to make learning to code fun and effective </p>
					</div>
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
	);
};

export default HomePage;

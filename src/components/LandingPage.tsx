/* eslint-disable react/jsx-no-comment-textnodes */

import Image from 'next/image';
import { BiLogoAirbnb, BiLogoMicrosoft, BiLogoSpotify } from 'react-icons/bi';
import { Navigation } from '@/enums/navigation.enum';
import Link from 'next/link';
import HoneyComb from './HoneyComb';
import CubeSlider from './CubeSlider';

const LandingPage = () => {
	return (
		<div className='h-full lg:px-8 max-w-[1560px] mx-auto '>
			<section className='xl:text-6xl lg:text-5xl text-4xl  pt-28 w-full px-[5%]'>
				<i className='hidden md:inline-block cherry relative -left-[48px]'></i>
				<div className='relative flex md:flex-row  flex-col justify-between items-center line-main'>
					<i className='hidden md:inline-block cherry absolute -left-[48px]  top-1/2'></i>
					<div className='md:w-1/2 md:mb-0 mb-8'>
						<p className='text-center md:text-left'>
							Start Learning <br /> <span className='font-thin text-transparent whitespace-nowrap text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'> &lt; Web Development &gt;</span> <br /> Right Now
						</p>
						<p className='text-gray-400 font-medium  text-lg  whitespace-pre-wrap mt-4'>
							Join our coding community and learn new <br /> skills with over 50 quizes and tasks across dozens <br /> of topics <br />
						</p>
						<Link href={Navigation.AuthSignUp} className='text-lg px-8 py-3 font-semibold bg-blue-700 rounded-lg hover:opacity-70 transition-opacity duration-300 ease-in-out'>
							Get Started
						</Link>
					</div>
					<div className='relative'>
						<Image alt='code landing page' width={500} height={200} className='object-fill shadow-xl shadow-gray-900' src='/code-landing-page.png' />
					</div>
				</div>
				<div className='relative flex w-full flex-col md:flex-row justify-between mt-12 mb-8 md:line-main'>
					<div className='absolute h-3/4 -left-[50px] border-l-[1px] -top-1/2 border-gray-400'></div>
					<div className='md:w-1/2 flex flex-col justify-center'>
						<h3>Join the Success</h3>
						<p className='text-gray-400 text-lg mt-4'>Since 2023, we have been instrumental in shaping the careers of more than 1,000 coders. Our members have successfully landed jobs at some of the most prestigious tech companies in the industry. With a commitment to excellence and a passion for continuous learning, we provide the necessary tools and guidance to help you thrive in your tech career.</p>
					</div>
					<div className='flex justify-center items-center mt-8 md:mt-0'>
						<i className='hidden md:inline-block cherry absolute -left-[48px] top-1/2'></i>
						<div
							style={{
								backgroundImage: `url('noise-bg.png')`,
								backgroundColor: 'rgba(9, 16, 35, 1)',
							}}
							className='text-lg py-4 w-fit h-fit rounded-lg border-2 border-gray-800 shadow-xl shadow-gray-900 flex flex-col justify-center items-center'>
							<p className='text-gray-400 text-sm px-4'>
								// since 2023, more than 1,000 Coders <br /> members have gotten job at tech companies //
							</p>
							<hr className='w-full my-4 border-gray-800 border-2' />
							<div className='md:text-lg text-base flex space-x-4 justify-between w-full px-2 md:px-4 '>
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
				<div className='relative flex md:flex-row flex-col w-full line-main'>
					<div className='absolute h-1/2 -left-[50px] border-l-[1px] -top-1/3 border-gray-400'></div>
					<i className=' hidden md:inline-block cherry absolute -left-[48px] top-1/2'></i>
					<div className='md:w-1/2 flex sm:justify-center md:mr-12 lg:mr-2'>
						<HoneyComb />
					</div>
					<div className='md:w-1/2 flex flex-col justify-center'>
						<h3>Learn</h3>
						<p className='text-gray-400 text-lg mt-4'>All our devcelopers are mentors who have veen hand-picked for their technical skills and passions for teaching. Our missions is to make learning to code fun and effective </p>
					</div>
				</div>
				<div className='relative text-center mb-12 mt-36'>
					<div className='hidden md:inline-block line-stroke line-connector'></div>
					<i className=' hidden md:inline-block cherry'></i>
					<h4 className='pt-4'>
						The place for anyone from anywhere <br /> to start coding
					</h4>
					<p className='text-lg py-4 text-gray-400 mx-[10%]'>Whether you’re learning how to code, Coders-Factory is your home. Join the world’s faster growing elearning platform to build the innovations that empower humanity. Let’s start from here.</p>
					<Link href={Navigation.AuthSignUp} className='text-lg px-8 py-3 font-semibold bg-white border border-gray-700 border-opacity-60 text-black rounded-lg hover:opacity-70 transition-opacity duration-300 ease-in-out'>
						Sign up for Coders
					</Link>
					<div className='w-full flex justify-center mt-12 '>
						<Image alt='globe ' width={300} height={300} className=' animate-rotateAnimation object-contain md:w-1/3 p-1' src='/globe.png' />
					</div>
				</div>
			</section>
			<CubeSlider />
		</div>
	);
};

export default LandingPage;

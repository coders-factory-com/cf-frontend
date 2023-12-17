
import Image from 'next/image';
import { BiLogoAirbnb, BiLogoMicrosoft, BiLogoSpotify } from 'react-icons/bi';
import { Navigation } from '@/enums/navigation.enum';
import Link from 'next/link';
import HoneyComb from './HoneyComb';
import CubeSlider from './CubeSlider';

const LandingPage = () => {
  return (
    <div className='mx-auto h-full max-w-[1560px] lg:px-8 '>
      <section className='w-full px-[5%] pt-28  text-4xl lg:text-5xl xl:text-6xl'>
        <i className='cherry relative -left-[48px] hidden md:inline-block'></i>
        <div className='line-main relative flex  flex-col items-center justify-between md:flex-row'>
          <i className='cherry absolute -left-[48px] top-1/2 hidden  md:inline-block'></i>
          <div className='mb-8 md:mb-0 md:w-1/2'>
            <p className='text-center md:text-left'>
              Start Learning <br />{' '}
              <span className='whitespace-nowrap bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-3xl font-thin text-transparent md:text-4xl'>
                {' '}
                &lt; Web Development &gt;
              </span>{' '}
              <br /> Right Now
            </p>
            <p className='mt-4 whitespace-pre-wrap  text-lg  font-medium text-gray-400'>
              Join our coding community and learn new <br /> skills with over 50 quizes and tasks across dozens <br />{' '}
              of topics <br />
            </p>
            <Link
              href={Navigation.AuthSignUp}
              className='rounded-lg bg-gradient-to-l from-blue-600 via-cyan-500 to-green-600 bg-size-200 bg-pos-0 px-8 py-3 text-lg font-semibold transition-all duration-500 hover:bg-pos-100'
            >
              Get Started
            </Link>
          </div>
          <div className='relative'>
            <Image
              alt='code landing page'
              width={500}
              height={200}
              className='object-fill shadow-xl shadow-gray-900'
              src='/code-landing-page.png'
            />
          </div>
        </div>
        <div className='md:line-main relative mb-8 mt-12 flex w-full flex-col justify-between md:flex-row'>
          <div className='absolute -left-[50px] -top-1/2 h-3/4 border-l-[1px] border-gray-400'></div>
          <div className='flex flex-col justify-center md:w-1/2'>
            <h3>Join the Success</h3>
            <p className='mt-4 text-lg text-gray-400'>
              Since 2023, we have been instrumental in shaping the careers of more than 1,000 coders. Our members have
              successfully landed jobs at some of the most prestigious tech companies in the industry. With a commitment
              to excellence and a passion for continuous learning, we provide the necessary tools and guidance to help
              you thrive in your tech career.
            </p>
          </div>
          <div className='mt-8 flex items-center justify-center md:mt-0'>
            <i className='cherry absolute -left-[48px] top-1/2 hidden md:inline-block'></i>
            <div className='flex h-fit w-fit flex-col items-center justify-center rounded-lg border-2 border-gray-800 bg-deepSpace bg-noise py-4 text-lg shadow-xl shadow-gray-900'>
              <p className='px-4 text-sm text-gray-400'>
                // since 2023, more than 1,000 Coders <br /> members have gotten job at tech companies //
              </p>
              <hr className='my-4 w-full border-2 border-gray-800' />
              <div className='flex w-full justify-between space-x-4 px-2 text-base md:px-4 md:text-lg '>
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
        <div className='line-main relative flex w-full flex-col md:flex-row'>
          <div className='absolute -left-[50px] -top-1/3 h-1/2 border-l-[1px] border-gray-400'></div>
          <i className=' cherry absolute -left-[48px] top-1/2 hidden md:inline-block'></i>
          <div className='flex sm:justify-center md:mr-12 md:w-1/2 lg:mr-2'>
            <HoneyComb />
          </div>
          <div className='flex flex-col justify-center md:w-1/2'>
            <h3>Learn</h3>
            <p className='mt-4 text-lg text-gray-400'>
              All our devcelopers are mentors who have veen hand-picked for their technical skills and passions for
              teaching. Our missions is to make learning to code fun and effective{' '}
            </p>
          </div>
        </div>
        <div className='relative mb-12 mt-36 text-center'>
          <div className='line-stroke line-connector hidden md:inline-block'></div>
          <i className=' cherry hidden md:inline-block'></i>
          <h4 className='pt-4'>
            The place for anyone from anywhere <br /> to start coding
          </h4>
          <p className='mx-[10%] py-4 text-lg text-gray-400'>
            Whether you’re learning how to code, Coders-Factory is your home. Join the world’s faster growing elearning
            platform to build the innovations that empower humanity. Let’s start from here.
          </p>
          <Link
            href={Navigation.AuthSignUp}
            className='rounded-lg border border-gray-700 bg-gray-200 px-8 py-3 text-lg font-semibold text-gray-700 transition-all duration-300  ease-in-out hover:bg-white hover:text-black'
          >
            Sign up for Coders
          </Link>
          <div className='mt-12 flex w-full justify-center '>
            <Image
              alt='globe '
              width={300}
              height={300}
              className=' animate-rotateAnimation object-contain p-1 md:w-1/3'
              src='/globe.png'
            />
          </div>
        </div>
      </section>
      <CubeSlider />
    </div>
  );
};

export default LandingPage;

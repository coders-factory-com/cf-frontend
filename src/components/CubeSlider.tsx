'use client';
import SwiperCore from 'swiper';
import { Pagination, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { MAIN_PAGE_PHOTOS } from '@/constants/mian-page.constant';

SwiperCore.use([EffectCube, Pagination]);

export const CubeSlider = () => {
	return (
		<div className='pb-12'>
			<Swiper className='max-w-[800px] cursor-grab' pagination={{ clickable: true }} effect='cube' centeredSlides scrollbar={{ draggable: true }}>
				{MAIN_PAGE_PHOTOS.map((photo, index) => (
					<SwiperSlide key={index}>
						<Image alt='slider photo' width={800} height={800} className='object-contain rounded-t-lg' src={photo.image} />
						<div className=' relative rounded-b-lg p-4 space-y-4 bg-noise bg-[#111113]'>
							<div className='bg-red-500 bg-noise rounded-full w-fit py-1 px-2 justify-start items-start flex'>
								<div className='text-gray-900 text-[12px] font-normal leading-none tracking-wide text-center whitespace-nowrap'> Carrers Insight</div>
							</div>
							<h3 className='font-thin text-2xl'>What is Mastery Learning, and How Does It Apply to Coding?</h3>
							<div>Mastery Learning is the idea that you need to master one concept before moving on to the next. Mastery Learning’s effectiveness comes from using iterative, hands-on subject matter practice, assessing and analyzing knowledge gaps, and leveraging insights gained from failures to fully understand the concept at hand. Then, you can move onto the next concept and repeat the process.</div>
							<div>
								<div className='flex py-4'>
									<Image src='/Ellipse.png' alt='' width={40} height={40} className='object-contain mr-4' />
									<div>
										<div className=' font-semibold'>Ellen Wayver</div>
										<div className='text-gray-400 text-base'>January 25, 2023</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CubeSlider;

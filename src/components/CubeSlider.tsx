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
      <Swiper
        className='max-w-[800px] cursor-grab'
        pagination={{ clickable: true }}
        effect='cube'
        centeredSlides
        scrollbar={{ draggable: true }}
      >
        {MAIN_PAGE_PHOTOS.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image
              alt='slider photo'
              width={800}
              height={800}
              className='rounded-t-lg object-contain'
              src={photo.image}
            />
            <div className=' relative space-y-4 rounded-b-lg bg-[#111113] bg-noise p-4'>
              <div className='flex w-fit items-start justify-start rounded-full bg-red-500 bg-noise px-2 py-1'>
                <div className='whitespace-nowrap text-center text-[12px] font-normal leading-none tracking-wide text-gray-900'>
                  {' '}
                  Carrers Insight
                </div>
              </div>
              <h3 className='text-2xl font-thin'>What is Mastery Learning, and How Does It Apply to Coding?</h3>
              <div>
                Mastery Learning is the idea that you need to master one concept before moving on to the next. Mastery
                Learning’s effectiveness comes from using iterative, hands-on subject matter practice, assessing and
                analyzing knowledge gaps, and leveraging insights gained from failures to fully understand the concept
                at hand. Then, you can move onto the next concept and repeat the process.
              </div>
              <div>
                <div className='flex py-4'>
                  <Image src='/Ellipse.png' alt='' width={40} height={40} className='mr-4 object-contain' />
                  <div>
                    <div className=' font-semibold'>Ellen Wayver</div>
                    <div className='text-base text-gray-400'>January 25, 2023</div>
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

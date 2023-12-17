'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CardProps {
  title: string;
  readTime: string;
}

const Card = ({ title, readTime }: CardProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => setIsActive(!!entry.isIntersecting));
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.7,
    });

    const elementId = title.replace(/\s+/g, '');
    const element = document.getElementById(elementId);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <a
      href={`#${title.replace(/\s+/g, '')}`}
      className={`self-stretch border bg-white transition-colors duration-300 ease-in-out ${
        isActive ? 'border-[#0f62fe]' : 'border-[#c6c6c6]'
      } flex items-start justify-start`}
    >
      <div className='flex shrink grow basis-0 flex-col items-start justify-start'>
        <div className='flex h-[34px] flex-col items-start justify-center self-stretch py-6 pr-4'>
          <div className='flex items-start justify-start gap-2 self-stretch pl-2.5'>
            <div className='flex h-[18px] w-full items-center justify-start bg-white'>
              {isActive ? (
                <Image width={14} height={14} alt='' className='mx-2' src='/Incomplete.svg' />
              ) : (
                <Image width={14} height={14} alt='' className='mx-2' src='/Circle-dash.svg' />
              )}
              <div className='text-[14px] font-normal leading-none tracking-wide text-neutral-900'>{title}</div>
            </div>
          </div>
          <div className='flex items-center justify-center self-stretch pl-[34px]'>
            <div className='shrink grow basis-0 text-[12px] font-normal leading-none tracking-wide text-neutral-600'>
              {readTime} min read
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;

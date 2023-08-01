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
			entries.forEach(entry => setIsActive(!!entry.isIntersecting));
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<a href={`#${title.replace(/\s+/g, '')}`} className={`self-stretch bg-white transition-colors duration-300 ease-in-out border ${isActive ? 'border-[#0f62fe]' : 'border-[#c6c6c6]'} justify-start items-start flex`}>
			<div className='grow shrink basis-0 flex-col justify-start items-start flex'>
				<div className='self-stretch h-[34px] pr-4 py-6 flex-col justify-center items-start flex'>
					<div className='self-stretch pl-2.5 justify-start items-start gap-2 flex'>
						<div className='h-[18px] bg-white justify-start items-center flex w-full'>
							{isActive ? <Image width={14} height={14} alt='' className='mx-2' src='/Incomplete.svg' /> : <Image width={14} height={14} alt='' className='mx-2' src='/Circle-dash.svg' />}
							<div className='text-neutral-900 text-[14px] font-normal leading-none tracking-wide'>{title}</div>
						</div>
					</div>
					<div className='self-stretch pl-[34px] justify-center items-center flex'>
						<div className='grow shrink basis-0 text-neutral-600 text-[12px] font-normal leading-none tracking-wide'>{readTime} min read</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default Card;

'use client';
import { CardProps } from '@/typings/typings';
import { useEffect, useState } from 'react';

function Card({ title, readTime }: CardProps) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsActive(true);
				} else {
					setIsActive(false);
				}
			});
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
		<a href={`#${title.replace(/\s+/g, '')}`} className={`self-stretch bg-white transition-colors duration-300 ease-in-out border ${isActive ? 'border-[#0f62fe]' : 'border-[#c6c6c6]'} justify-start items-start flex`}>
			<div className='grow shrink basis-0 flex-col justify-start items-start flex'>
				<div className='self-stretch h-[34px] pr-4 py-6 flex-col justify-center items-start flex'>
					<div className='self-stretch pl-2.5 justify-start items-start gap-2 flex'>
						<div className='py-[1px] justify-start items-start flex'>
							<div className='w-4 h-4 relative bg-white' />
						</div>
						<div className='h-[18px] bg-white flex-col justify-start items-start flex'>
							<div className='text-neutral-900 text-[14px] font-normal leading-none tracking-wide'>{title}</div>
						</div>
					</div>
					<div className='self-stretch pl-[34px] justify-start items-start flex'>
						<div className='grow shrink basis-0 text-neutral-600 text-[12px] font-normal leading-none tracking-wide'>{readTime} min read</div>
					</div>
				</div>
			</div>
		</a>
	);
}

export default Card;

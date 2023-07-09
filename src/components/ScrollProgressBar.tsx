'use client';
import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const progress = (scrollTop / scrollableHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='absolute top-0 h-full w-[4px] bg-[#c6c6c6] '>
			<div className='w-[4px] bg-[#0f62fe] ' style={{ height: `${scrollProgress}%` }}></div>
		</div>
	);
};

export default ScrollProgressBar;

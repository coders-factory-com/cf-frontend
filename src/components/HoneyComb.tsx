'use client';
import { useState } from 'react';
import HexagonIcon from './common/HexagonIcon';
import { technologies } from '@/utils';
import { Tech } from '@/types/common';
import { AiFillCloseCircle } from 'react-icons/ai';

const HoneyComb = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

	const handleIconClick = (tech: Tech) => {
		setSelectedTech(tech);
		setIsModalOpen(true);
	};

	return (
		<div className='grid grid-cols-3 w-fit'>
			{technologies.map((tech, index) => (
				<div key={index} className={`flex relative w-fit justify-center items-center ${index <= 2 ? 'top-4 left-12' : index >= 6 ? '-top-4 left-12' : '!top-0 !left-0'}`} onClick={() => handleIconClick(tech)}>
					<HexagonIcon color={tech.color} backgroundColor={tech.backgroundColor} IconComponent={tech.IconComponent} />
				</div>
			))}
			<div className={`z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} ease-in-out transition-all duration-300`}>
				<div className='bg-black p-4 rounded-md max-w-[400px] relative border border-gray-900 shadow-lg shadow-black'>
					<button className='text-white text-4xl absolute top-2 right-2' onClick={() => setIsModalOpen(false)}>
						<AiFillCloseCircle />
					</button>
					{selectedTech && (
						<div className='flex flex-col bg-black justify-center items-center'>
							<div className={`${isModalOpen ? ' animate-scaleAnimation ' : ''} `}>{selectedTech.IconComponent && <HexagonIcon color={selectedTech.color} backgroundColor={selectedTech.backgroundColor} IconComponent={selectedTech.IconComponent} />}</div>
							<p className={`text-base mt-8 text-gray-400 w-full px-4 ease-in-out transition-opacity delay-300 duration-300 ${isModalOpen ? ' opacity-100 ' : 'opacity-0'}`}>{selectedTech.modalContent}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HoneyComb;

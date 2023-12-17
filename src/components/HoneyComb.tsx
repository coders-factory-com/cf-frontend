'use client';
import { useState } from 'react';
import HexagonIcon from './common/HexagonIcon';
import { technologies } from '@/utils';
import { AiFillCloseCircle } from 'react-icons/ai';

const HoneyComb = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  const handleIconClick = (tech: Tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  return (
    <div className='grid w-fit grid-cols-3'>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`relative flex w-fit items-center justify-center ${
            index <= 2 ? 'left-12 top-4' : index >= 6 ? '-top-4 left-12' : '!left-0 !top-0'
          }`}
          onClick={() => handleIconClick(tech)}
        >
          <HexagonIcon color={tech.color} backgroundColor={tech.backgroundColor} IconComponent={tech.IconComponent} />
        </div>
      ))}
      <div
        className={`fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${
          isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
        } transition-all duration-300 ease-in-out`}
      >
        <div className='relative max-w-[400px] rounded-md border border-gray-900 bg-black p-4 shadow-lg shadow-black'>
          <button className='absolute right-2 top-2 text-4xl text-white' onClick={() => setIsModalOpen(false)}>
            <AiFillCloseCircle />
          </button>
          {selectedTech && (
            <div className='flex flex-col items-center justify-center bg-black'>
              <div className={`${isModalOpen ? ' animate-scaleAnimation ' : ''} `}>
                {selectedTech.IconComponent && (
                  <HexagonIcon
                    color={selectedTech.color}
                    backgroundColor={selectedTech.backgroundColor}
                    IconComponent={selectedTech.IconComponent}
                  />
                )}
              </div>
              <p
                className={`mt-8 w-full px-4 text-base text-gray-400 transition-opacity delay-300 duration-300 ease-in-out ${
                  isModalOpen ? ' opacity-100 ' : 'opacity-0'
                }`}
              >
                {selectedTech.modalContent}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoneyComb;

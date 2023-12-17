import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <div
        className={`flex h-auto flex-col items-center  justify-center gap-2.5 self-stretch bg-neutral-900 px-5 py-4  transition-all duration-300 ease-in-out`}
      >
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className={`self-stretch p-3 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          } order-b-bg-neutral-900 relative flex cursor-pointer items-center justify-center gap-4 border-b-2 border-neutral-400 bg-zinc-800 transition-opacity duration-300 ease-in-out`}
        >
          <Image height={48} width={48} alt='' src='/Search.svg' />
          <div className='flex max-h-[18px] w-[318px] items-start justify-start'>
            <div className='h-[18px] shrink grow basis-0 text-[14px] font-normal leading-none tracking-wide text-neutral-400'>
              Search
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={`fixed inset-0 z-10 bg-black bg-opacity-50 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={`self-stretch ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }  fixed left-1/2 top-1/4 flex h-auto -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2.5 bg-neutral-900 px-5 py-4  transition-all duration-300 ease-in-out`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`relative flex items-center  justify-center  gap-4 self-stretch bg-zinc-800 p-3`}
          >
            <div
              className={` ${
                isOpen ? ' scale-x-100' : ' scale-x-0'
              } border-b-bg-neutral-900 absolute bottom-0 w-full origin-center border border-b-2  border-neutral-400 transition-all delay-500 duration-300 ease-in-out`}
            ></div>
            <Image height={48} width={48} alt='search icon' src='/Search.svg' />
            <input
              type='text'
              placeholder='Search'
              className={` ${
                isOpen ? 'w-[314px]' : 'w-2'
              } flex h-full items-start justify-start bg-zinc-800 text-2xl text-white transition-all delay-100 duration-300 ease-in-out`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;

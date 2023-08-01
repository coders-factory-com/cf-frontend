import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
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
			<div className={`self-stretch h-auto px-5 py-4  bg-neutral-900 flex-col justify-center items-center gap-2.5 flex  transition-all duration-300 ease-in-out`}>
				<div
					onClick={() => {
						setIsOpen(prev=>!prev);
					}}
					className={`p-3 self-stretch ${isOpen ? 'opacity-0' : 'opacity-100'} cursor-pointer duration-300 transition-opacity ease-in-out relative bg-zinc-800 border-neutral-400 border-b-2 order-b-bg-neutral-900 gap-4 justify-center items-center flex`}>
					<Image height={48} width={48} alt='' src='/Search.svg' />
					<div className='w-[318px] max-h-[18px] justify-start items-start flex'>
						<div className='grow shrink basis-0 h-[18px] text-neutral-400 text-[14px] font-normal leading-none tracking-wide'>Search</div>
					</div>
				</div>
			</div>
			<div
				onClick={() => {
					setIsOpen(false);
				}}
				className={`fixed inset-0 z-10 bg-black bg-opacity-50 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300 ease-in-out`}>
				<div className={`self-stretch ${isOpen ? 'opacity-100' : 'opacity-0'}  fixed -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2 h-auto px-5 py-4 bg-neutral-900 flex-col justify-center items-center gap-2.5 flex  transition-all duration-300 ease-in-out`}>
					<div
						onClick={e => {
							e.stopPropagation();
						}}
						className={`p-3 relative self-stretch  bg-zinc-800  gap-4 justify-center items-center flex`}>
						<div className={` ${isOpen ? ' scale-x-100' : ' scale-x-0'} border-neutral-400 border-b-2 absolute bottom-0 border w-full origin-center  delay-500 transition-all duration-300 ease-in-out border-b-bg-neutral-900`}></div>
						<Image height={48} width={48} alt='search icon' src='/Search.svg' />
						<input type='text' placeholder='Search' className={` ${isOpen ? 'w-[314px]' : 'w-2'} bg-zinc-800 text-white text-2xl duration-300 delay-100 transition-all ease-in-out h-full justify-start items-start flex`} value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBar;

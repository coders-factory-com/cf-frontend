'use client';
import Button from '@/components/common/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {Navigation} from "@/enums/navigation.enum";
import {MAIN_PAGE_PHOTOS} from "@/constants/mian-page.constant";

export default function HomePage() {
	const {push} = useRouter();

	return (
		<main className=' max-w-[100vw]  min-h-screen h-full'>
			<div className='h-full relative p-8 bg-neutral-50'>
				<h1 className='text-7xl font-bold text-center'>Coders-Factory - Enhance Your Mastery</h1>
				<div className=' items-center justify-center w-full space-x-12 flex my-12'>
					<Button
						variant='primary'
						onClick={() => push(Navigation.AuthLogin)}
						text='Login'
					/>
					<Button
						variant='primary'
						text='Sign Up'
						onClick={() => push(Navigation.AuthLogin)}
					/>
				</div>

				<h2 className='text-5xl font-bold '>Explore</h2>
				<div className='w-full justify-evenly flex'>
					<div className='flex justify-evenly my-8 flex-wrap  w-[800px]'>
						{MAIN_PAGE_PHOTOS.map((photo, index) => (
							<Image alt='' width={400} height={400} key={index} className='object-contain w-1/2 p-1' src={photo.image} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

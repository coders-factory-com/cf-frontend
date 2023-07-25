'use client';
import Button from '@/common/Button';

import { login, selectIsLoggedIn } from '@/redux/authSlice';
import { mainPagePhotoData, topicCards } from '@/utils';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function HomePage() {
	const router = useRouter();
	const dispatch = useDispatch();

	return (
		<main className=' max-w-[100vw]  min-h-screen h-full'>
			<div className='h-full relative p-8 bg-neutral-50'>
				<h1 className='text-7xl font-bold text-center'>Coders-Factory - Enhance Your Mastery</h1>
				<div className=' items-center justify-center w-full space-x-12 flex my-12'>
					<Button
						variant='primary'
						onClick={() => {
							router.push(`/auth/login`);
						}}
						text='Login'
					/>
					<Button
						variant='primary'
						text='Sign Up'
						onClick={() => {
							router.push(`/auth/signup`);
						}}
					/>
				</div>

				<h2 className='text-5xl font-bold '>Explore</h2>
				<div className='w-full justify-evenly flex'>
					<div className='flex justify-evenly my-8 flex-wrap  w-[800px]'>
						{mainPagePhotoData.map((photo, index) => (
							<Image alt='' width={400} height={400} key={index} className='object-contain w-1/2 p-1' src={photo.image} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('Dane logowania:', { email, password });
	};

	return (
		<div className='w-[500px]'>
			<h2 className='flex my-6 justify-center items-center'>
				<div className='p-0.5 bg-gray-300 rounded justify-center items-center gap-2.5 flex mr-4'>
					<div className='text-black text-[14px] font-semibold leading-none tracking-wide'>&lt;/&gt;</div>
				</div>
				<div className='text-black text-[14px] font-bold leading-none whitespace-nowrap tracking-wide'>Coders-Factory</div>
			</h2>
			<h3 className='text-center font-bold text-2xl'>For Developers</h3>

			<p className='!my-4 w-full text-center'>Practice coding, prepare for interviews, and get hired.</p>
			<div className='shadow-lg pb-8 bg-white'>
				<div className='relative overflow-hidden h-14 '>
					<Link href='/auth/singup' className='relative w-1/2 text-center inline-block py-4 z-0 bg-[#f9fbfb] font-bold'>
						Sing Up
					</Link>
					<Link href='/auth/login' className='relative inline-block text-center w-1/2 py-4 z-[1]  bg-white left-shadow font-bold'>
						Login
					</Link>
				</div>
				<form className='relative z-[3]  px-6 mt-4 py-6 space-y-8' onSubmit={handleSubmit}>
					<div className='relative'>
						<FiUser className='absolute text-2xl  top-1/2 left-4 transform -translate-y-1/2' />
						<input type='email' placeholder='E-mail' value={email} className='appearance-none py-4 w-full border-[1px] border-gray-200 rounded-lg hover:border-black pl-12' onChange={e => setEmail(e.target.value)} />
					</div>
					<div className='relative'>
						<AiOutlineLock className='absolute text-2xl  top-1/2 left-4 transform -translate-y-1/2' />
						<input type='password' className='appearance-none py-4 w-full border-[1px] border-gray-200 rounded-lg hover:border-black pl-12' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
					</div>
					<div className='flex justify-between items-center'>
						<label className='flex justify-between items-center' htmlFor='remember'>
							<input id='remember' className='mr-4 w-4 h-4 accent-green-700' type='checkbox' />
							Remember me
						</label>
						<Link className='text-blue-600 underline' href='/auth/forgot_password'>
							Forgot your password?
						</Link>
					</div>
					<button className=' bg-[#00751f]  hover:bg-[#0f6125] transition-colors duration-200 ease-in-out py-3 px-6 text-white font-bold rounded-lg' type='submit'>
						Log in
					</button>
				</form>
				<div className='flex w-full  px-6 justify-center items-center'>
					<hr className='w-full' />
					<p className='w-fit whitespace-nowrap px-4 text-gray-300'>or connect with</p>
					<hr className='w-full' />
				</div>
				<ul className='flex w-full justify-between px-4 mt-4'>
					<li className='px-8 border-r-[1px] border-gray-200'>
						<Image width={40} height={40} className='cursor-pointer' src='/facebook-icon.svg' alt='facebook icon' />
					</li>

					<li className='pr-8 border-r-[1px] border-gray-200'>
						<Image width={40} height={40} className='cursor-pointer' src='/google-icon.svg' alt='google icon' />
					</li>
					<li className='pr-8 border-r-[1px] border-gray-200'>
						<Image width={40} height={40} className='cursor-pointer' src='/linkedin-icon.svg' alt='linkedin icon' />
					</li>
					<li className='pr-8'>
						<Image width={40} height={40} className='cursor-pointer' src='/github-icon.svg' alt='github icon' />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LoginForm;

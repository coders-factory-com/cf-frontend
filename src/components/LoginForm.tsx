'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { Input } from '@/common/Input';
import { socialIcons } from '@/utils';
import FormHeader from './FormHeader';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('Dane logowania:', { email, password });
	};

	return (
		<div className='w-[500px]'>
			<FormHeader />
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
					<Input icon={<FiUser />} placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
					<Input icon={<AiOutlineLock />} isPassword placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
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
					{socialIcons.map((icon, index) => (
						<li key={index} className={`${index !== socialIcons.length - 1 ? 'px-8 border-r-[1px] border-gray-200' : 'pr-8'}`}>
							<Image width={40} height={40} className='cursor-pointer' src={icon.src} alt={icon.alt} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default LoginForm;

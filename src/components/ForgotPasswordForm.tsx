'use client';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { Input } from '@/common/Input';
import FormHeader from './FormHeader';

function ForgotPasswordForm() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className='w-[500px]'>
			<FormHeader />
			<div className='shadow-lg pt-4 px-6 bg-white'>
				<div className='mt-6 w-full text-center'>
					<h3 className='font-bold text-xl '> Forgot Password</h3>
					<p className='text-gray-500'>No Problem! Enter your email or username below and we will send you an email with instruction to reset your</p>
				</div>
				<form className='relative z-[3] mt-4 py-6 space-y-8' onSubmit={handleSubmit}>
					<Input placeholder='E-mail or Username' value={email} onChange={e => setEmail(e.target.value)} />
					<button className=' bg-[#00751f] hover:bg-[#0f6125] transition-colors duration-200 ease-in-out py-3 px-6 w-full text-white font-bold rounded-lg' type='submit'>
						Send reset link
					</button>
				</form>
				<p className='my-4 text-center inline-block w-full'>
					Back to
					<Link href='/auth/login' className='text-blue-600 underline ml-2'>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}

export default ForgotPasswordForm;

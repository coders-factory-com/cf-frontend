'use client';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { FormEvent, useState } from 'react';

function ForgotPasswordForm() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
			<div className='shadow-lg pt-4 px-6 bg-white'>
				<div className='mt-6 w-full text-center'>
					<h3 className='font-bold text-xl '> Forgot Password</h3>
					<p className='text-gray-500'>No Problem! Enter your email or username below and we will send you an email with instruction to reset your</p>
				</div>
				<form className='relative z-[3] mt-4 py-6 space-y-8' onSubmit={handleSubmit}>
					<div className='relative'>
						<FiUser className='absolute text-2xl  top-1/2 left-4 transform -translate-y-1/2' />
						<input type='email' placeholder='E-mail or Username' value={email} className='appearance-none py-4 w-full border-[1px] border-gray-200 rounded-lg hover:border-black pl-12' onChange={e => setEmail(e.target.value)} />
					</div>
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

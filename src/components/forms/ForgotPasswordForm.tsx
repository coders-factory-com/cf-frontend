'use client';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { Input } from '@/common/Input';
import FormHeader from '../FormHeader';
import { z } from 'zod';
import ErrorMessage from '@/common/ErrorMessage';
import Button from '@/common/Button';

const ForgotPasswordFormSchema = z.object({
	email: z.string().email('Invalid email format'),
});

function ForgotPasswordForm() {
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState<ErrorSchema | null>(null);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = ForgotPasswordFormSchema.safeParse({ email });

		if (result.success) {
			setErrors(null);
			console.log('E-mail:', result.data);
		} else {
			setErrors(result.error.formErrors.fieldErrors);
		}
	};

	return (
		<div className='w-[500px]'>
			<FormHeader />
			<div className='shadow-lg pt-4 px-6 bg-white'>
				<div className='mt-6 w-full text-center'>
					<h3 className='font-bold text-xl '> Forgot Password</h3>
					<p className='text-gray-500'>No Problem! Enter your email below and we will send you an email with instruction to reset your</p>
				</div>
				<form className='relative z-[3] mt-4 py-6 space-y-8' onSubmit={handleSubmit}>
					<Input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
					{errors?.email && <ErrorMessage>{errors.email}</ErrorMessage>}
					<Button text='	Send reset link' variant='secondary' addedClassName='w-full' />
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

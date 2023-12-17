'use client';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { Input } from '@/components/common/Input';
import { z } from 'zod';
import ErrorMessage from '@/components/common/ErrorMessage';
import Button from '@/components/common/Button';
import { Navigation } from '@/enums/navigation.enum';

const ForgotPasswordFormSchema = z.object({
  email: z.string().email('Invalid email format'),
});

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<ErrorSchema | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = ForgotPasswordFormSchema.safeParse({ email });
    if (result.success) {
      setErrors(null);
    } else {
      setErrors(result.error.formErrors.fieldErrors);
    }
  };

  return (
    <div className='px-6'>
      <div className='mt-6 w-full text-center'>
        <h3 className='text-xl font-bold '> Forgot Password</h3>
        <p className='text-gray-500'>
          No Problem! Enter your email below and we will send you an email with instruction to reset your
        </p>
      </div>
      <form className='relative z-[3] mt-4 space-y-8 py-6' onSubmit={handleSubmit}>
        <Input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors?.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Button text='Send reset link' variant='secondary' addedClassName='w-full' />
      </form>
      <p className='my-4 inline-block w-full text-center'>
        Back to
        <Link href={Navigation.AuthLogin} className='ml-2 text-blue-600 underline'>
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;

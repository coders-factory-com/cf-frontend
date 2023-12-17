'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { Input } from '@/components/common/Input';
import { z } from 'zod';
import ErrorMessage from '@/components/common/ErrorMessage';
import Button from '@/components/common/Button';
import { signIn } from 'next-auth/react';
import { SOCIAL_PROVIDER_ICONS } from '@/constants/social-provider.constant';
import { Navigation } from '@/enums/navigation.enum';

const LoginFormSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Minimum password length is 8'),
});

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorSchema | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = LoginFormSchema.safeParse({ email, password });
    if (result.success) {
      setErrors(null);
      signIn('credentials', {
        email,
        password,
        callbackUrl: '/home',
      }).catch((error: string) => {
        console.log(error);
      });
    } else {
      setErrors(result.error.formErrors.fieldErrors);
    }
  };
  return (
    <div>
      <div className='relative h-14 overflow-hidden '>
        <Link
          href={Navigation.AuthSignUp}
          className='relative z-0 inline-block w-1/2 bg-[#f9fbfb] py-4 text-center font-bold'
        >
          Sign Up
        </Link>
        <Link
          href={Navigation.AuthLogin}
          className='left-shadow relative z-[1] inline-block w-1/2 bg-white  py-4 text-center font-bold'
        >
          Login
        </Link>
      </div>
      <form className='relative z-[3]  mt-4 space-y-8 px-6 py-6' onSubmit={handleSubmit}>
        <Input icon={<FiUser />} placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          icon={<AiOutlineLock />}
          isPassword
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        {errors?.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <div className='flex items-center justify-between text-xs lg:text-base'>
          <label className='flex items-center justify-between' htmlFor='remember'>
            <input id='remember' className='mr-4 h-4 w-4 accent-green-700' type='checkbox' />
            Remember me
          </label>
          <Link className='text-blue-600 underline' href={Navigation.AuthForgotPassword}>
            Forgot your password?
          </Link>
        </div>
        <Button variant='secondary' type='submit' text='Log in' />
      </form>
      <div className='flex w-full  items-center justify-center px-6'>
        <hr className='w-full' />
        <p className='w-fit whitespace-nowrap px-4 text-gray-300'>or connect with</p>
        <hr className='w-full' />
      </div>
      <ul className='mt-4 flex w-full justify-between px-4'>
        {SOCIAL_PROVIDER_ICONS.map((icon, index) => (
          <li
            key={index}
            className={`${
              index === 0
                ? 'ml-4 border-r-[1px] border-gray-200 px-4 xl:ml-8 xl:px-8'
                : index === SOCIAL_PROVIDER_ICONS.length - 1
                ? 'mr-4 px-4  xl:mr-8 xl:px-8'
                : 'border-r-[1px] border-gray-200 px-4 xl:px-8'
            }`}
          >
            <Image
              width={40}
              height={40}
              className='cursor-pointer'
              src={icon.src}
              alt={icon.alt}
              onClick={() => {
                signIn(icon.provider, { callbackUrl: `${window.location.origin}/home` });
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoginForm;

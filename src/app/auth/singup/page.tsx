'use client';

import RegisterForm from '@/components/RegisterForm';

const RegisterPage = () => {
	return (
		<div className='w-[calc(100%-191px)] left-[191px] h-screen min-h-full relative p-8 bg-neutral-50 flex justify-start flex-col items-center'>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;

'use client';

import RegisterForm from '@/components/forms/RegisterForm';

const RegisterPage = () => {
	return (
		<div className='h-screen min-h-full relative p-8 bg-neutral-50 flex justify-start flex-col items-center'>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;

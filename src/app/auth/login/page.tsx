'use client';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
	return (
		<div className='w-[calc(100%-191px)] left-[191px] h-screen min-h-full relative p-8 bg-neutral-50 flex justify-start flex-col items-center'>
			<LoginForm />
		</div>
	);
};
export default LoginPage;

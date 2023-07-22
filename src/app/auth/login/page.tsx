'use client';
import LoginForm from '@/components/forms/LoginForm';

const LoginPage = () => {
	return (
		<div className='h-screen min-h-full relative p-8 bg-neutral-50 flex justify-start flex-col items-center'>
			<LoginForm />
		</div>
	);
};
export default LoginPage;

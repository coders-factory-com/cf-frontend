import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const Input = ({ icon, placeholder, isPassword = false, ...props }: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='relative'>
			{icon && <div className='absolute text-2xl  top-1/2 left-4 transform -translate-y-1/2'>{icon}</div>}
			{isPassword && (
				<div className='absolute text-2xl top-1/2 right-4 transform -translate-y-1/2 cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>
					{showPassword ? <FiEyeOff /> : <FiEye />}
				</div>
			)}
			<input type={isPassword && !showPassword ? 'password' : 'text'} placeholder={placeholder} className={`appearance-none py-4 w-full border-[1px] border-gray-200 rounded-lg hover:border-black ${icon ? 'pl-12' : 'pl-4'}`} {...props} />
		</div>
	);
};

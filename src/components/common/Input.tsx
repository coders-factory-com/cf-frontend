import { ReactNode, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps {
  icon?: ReactNode;
  placeholder: string;
  isPassword?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ icon, placeholder, isPassword = false, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      {icon && <div className='absolute left-4  top-1/2 -translate-y-1/2 transform text-2xl'>{icon}</div>}
      {isPassword && (
        <div
          className='absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-2xl'
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </div>
      )}
      <input
        type={isPassword && !showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        className={`w-full appearance-none rounded-lg border-[1px] border-gray-200 py-4 hover:border-black ${
          icon ? 'pl-12' : 'pl-4'
        }`}
        {...props}
      />
    </div>
  );
};

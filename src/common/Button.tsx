import clsx from 'clsx';

const Button = ({ type, text, onClick, disabled, addedClassName = '' }: ButtonProps) => {
	return (
		<button type={type} disabled={disabled} className={clsx(`disabled:opacity-60 my-4 hover:bg-white border px-6 py-4 text-center cursor-pointer hover:text-blue-600 text-[14px] font-normal bg-blue-600 text-white transition-colors duration-300 ease-in-out leading-none tracking-wide`, addedClassName)} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;

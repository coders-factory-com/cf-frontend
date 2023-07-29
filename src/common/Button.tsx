import clsx from 'clsx';
interface ButtonProps {
	text: string;
	type?: 'submit' | 'button';
	onClick?: () => void;
	disabled?: boolean;
	variant: 'primary' | 'secondary';
	addedClassName?: string;
}

const Button = ({ type, text, onClick, disabled, variant = 'primary', addedClassName }: ButtonProps) => {
	const baseClasses = 'disabled:opacity-60 my-4 border px-6 py-4 text-center cursor-pointer text-[14px] transition-colors duration-300 ease-in-out leading-none tracking-wide';
	const primaryClasses = 'hover:bg-gray-200 bg-blue-600 text-white hover:text-blue-600 font-normal';
	const secondaryClasses = 'bg-[#00751f] hover:bg-[#0f6125] text-white font-bold rounded-lg';
	const buttonClasses = clsx(baseClasses, addedClassName, variant === 'primary' ? primaryClasses : secondaryClasses, disabled && 'opacity-60');

	return (
		<button type={type} disabled={disabled} onClick={onClick} className={buttonClasses}>
			{text}
		</button>
	);
};

export default Button;

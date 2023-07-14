const Button = ({ type, text, onClick, disabled, className = '' }: ButtonProps) => {
	const defaultClasses = ' disabled:opacity-60 font-bold my-4 hover:bg-white border px-6 bg-blue-600 py-4 text-center cursor-pointer hover:text-blue-600 text-[14px] font-normalbg-blue-600 text-white transition-colors duration-300 ease-in-out leading-none tracking-wide';
	const combinedClasses = `${defaultClasses} ${className}`;

	return (
		<button type={type} disabled={disabled} className={combinedClasses} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;

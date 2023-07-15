const Button = ({ type, text, onClick, disabled, addedClassName = '' }: ButtonProps) => {
	return (
		<button type={type} disabled={disabled} className={`${addedClassName} btn-primary`} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;

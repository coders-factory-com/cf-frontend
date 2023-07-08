interface BreadcrumbProps {
	textColor: string;
	text: string;
}
function Breadcrumb({ textColor, text }: BreadcrumbProps) {
	return (
		<div className='bg-white flex-col justify-start items-start inline-flex'>
			<div className='justify-start items-start gap-2 inline-flex'>
				<div className='justify-start items-start flex'>
					<div className={`text-${textColor} text-[14px] font-normal leading-none tracking-wide`}>{text}</div>
				</div>
				<div className='text-neutral-900 text-[14px] font-normal leading-none tracking-wide'>/</div>
			</div>
		</div>
	);
}
export default Breadcrumb;

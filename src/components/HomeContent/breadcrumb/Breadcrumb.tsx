interface BreadcrumbProps {
	text: string;
	index: number;
	handleClick: (index: number) => void;
}
const Breadcrumb = ({ text, index, handleClick }: BreadcrumbProps) => (
	<button onClick={() => handleClick(index)} className='bg-white justify-start items-start inline-flex'>
		<div className='justify-start items-start flex'>
			<div className='justify-start items-start flex'>
				<div className={`text-neutral-600 mx-1 text-[14px] font-normal leading-none tracking-wide`}>{text}</div>
			</div>
			<div className='text-neutral-900 text-[14px] font-normal leading-none tracking-wide'>/</div>
		</div>
	</button>
);
export default Breadcrumb;

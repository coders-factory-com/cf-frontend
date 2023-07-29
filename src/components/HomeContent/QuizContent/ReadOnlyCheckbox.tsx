import { BiSolidCheckSquare, BiSquare } from 'react-icons/bi';

interface ReadOnlyCheckboxProps {
	text: string;
	isChecked: boolean;
}

const ReadOnlyCheckbox = ({ text, isChecked }: ReadOnlyCheckboxProps) =>(
		<div className='bg-white flex-col justify-start items-start gap-2 flex'>
			<div className='justify-start items-center gap-2 flex'>
				<div className='relative bg-white flex items-center justify-center'>{isChecked ? <BiSolidCheckSquare className='w-6 h-6 ' /> : <BiSquare className='w-6 h-6 ' />}</div>
				<div className='flex-col justify-start items-start flex'>
					<div className='text-neutral-900 text-sm font-normal leading-[18px] tracking-tight'>{text}</div>
				</div>
			</div>
		</div>
	);


export default ReadOnlyCheckbox;

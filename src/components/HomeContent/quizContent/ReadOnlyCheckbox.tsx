import { BiSolidCheckSquare, BiSquare } from 'react-icons/bi';

interface ReadOnlyCheckboxProps {
  text: string;
  isChecked: boolean;
}

const ReadOnlyCheckbox = ({ text, isChecked }: ReadOnlyCheckboxProps) => (
  <div className='flex flex-col items-start justify-start gap-2 bg-white'>
    <div className='flex items-center justify-start gap-2'>
      <div className='relative flex items-center justify-center bg-white'>
        {isChecked ? <BiSolidCheckSquare className='h-6 w-6 ' /> : <BiSquare className='h-6 w-6 ' />}
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-sm font-normal leading-[18px] tracking-tight text-neutral-900'>{text}</div>
      </div>
    </div>
  </div>
);

export default ReadOnlyCheckbox;

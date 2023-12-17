import { IconType } from 'react-icons/lib';

interface HexagonIconProps {
  IconComponent: IconType;
  color?: string;
  backgroundColor?: string;
}

const HexagonIcon: React.FC<HexagonIconProps> = ({ IconComponent, color, backgroundColor }) => (
  <div className='polygon relative flex h-24  w-24 cursor-pointer items-center justify-center overflow-hidden '>
    <svg className='absolute z-0 h-full w-full  ' viewBox='0 0 100 100' preserveAspectRatio='none'>
      <polygon
        points='50 1, 95 25, 95 75, 50 99, 5 75, 5 25'
        stroke='#202b3c'
        strokeWidth='2'
        fill={backgroundColor ?? 'white'}
      />
    </svg>
    <div className='z-[1]'>
      <IconComponent color={color ?? 'black'} size={48} />
    </div>
  </div>
);

export default HexagonIcon;

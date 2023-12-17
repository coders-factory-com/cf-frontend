interface TopicCardProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}
const TopicCard = ({ title, isActive, onClick }: TopicCardProps) => (
  <div
    onClick={onClick}
    className={`flex cursor-pointer items-start justify-start gap-2 border-b-[1px] bg-white px-4 py-4 ${
      isActive ? 'border-blue-600' : 'border-neutral-200'
    }`}
  >
    <div className='flex w-[46px] items-start justify-start'>
      <div className='text-[14px] font-semibold leading-none tracking-wide text-neutral-900'>{title}</div>
    </div>
  </div>
);

export default TopicCard;

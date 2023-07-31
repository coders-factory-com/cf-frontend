interface TopicCardProps {
	title: string;
	onClick: () => void;
	isActive: boolean;
}
const TopicCard = ({ title, isActive, onClick }: TopicCardProps) => (
	<div onClick={onClick} className={`px-4 py-4 bg-white border-b-[1px] cursor-pointer justify-start items-start gap-2 flex ${isActive ? 'border-blue-600' : 'border-neutral-200'}`}>
		<div className='w-[46px] justify-start items-start flex'>
			<div className='text-neutral-900 text-[14px] font-semibold leading-none tracking-wide'>{title}</div>
		</div>
	</div>
);

export default TopicCard;

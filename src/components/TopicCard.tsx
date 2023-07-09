import { TopicCardProps } from "@/typings/typings";


function TopicCard({ color, title }: TopicCardProps) {
	return (
		<div className={`px-4 py-4 bg-white border-b-[1px] border-${color} justify-start items-start gap-2 flex`}>
			<div className='w-[46px] justify-start items-start flex'>
				<div className='text-neutral-900 text-[14px] font-semibold leading-none tracking-wide'>{title}</div>
			</div>
		</div>
	);
}

export default TopicCard;

import Link from 'next/link';

export default function LinkList({ data, urlMapper }: LinkListProps) {
	return (
		<ul>
			{data.map((item, index: number) => (
				<li key={index}>
					<Link href={urlMapper(item)}>{item.name}</Link>
				</li>
			))}
		</ul>
	);
}

import Link from 'next/link';
interface LinkListProps {
  data: Array<Item>;
  urlMapper: (item: Item) => string;
}
const LinkList = ({ data, urlMapper }: LinkListProps) => (
  <ul>
    {data.map((item, index: number) => (
      <li key={index}>
        <Link href={urlMapper(item)}>{item.name}</Link>
      </li>
    ))}
  </ul>
);
export default LinkList;

'use client';
import { usePathname } from 'next/navigation';
import { categories} from '@/utils';
import LinkList from '@/common/LinkList';

export default function SubCategoriesList() {
	const pathname = usePathname();
	const categoryPath = pathname.split('/').pop();

	const category = categories.find(category => category.href === categoryPath);

	return category ? <LinkList data={category.subcategories} urlMapper={subCategory => `${pathname}/${subCategory.name.toLowerCase().split(' ').join('-')}`} /> : <p>Ups Someting went wrong</p>;
}

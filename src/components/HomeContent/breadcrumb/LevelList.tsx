'use client';
import LinkList from '@/common/LinkList';
import { categories } from '@/utils';
import { usePathname } from 'next/navigation';

export function LevelsList() {
	const pathname = usePathname();
	const subCategoryPath = pathname.split('/').pop();

	const subCategory = categories.flatMap(category => category.subcategories).find(subCategory => subCategory.name.toLowerCase().split(' ').join('-') === subCategoryPath);

	if (subCategory) {
		const levelsAsItems = subCategory.levels.map(level => ({
			name: level,
		}));

		return (
			<div>
				<LinkList data={levelsAsItems} urlMapper={level => `${pathname}/${level.name.toLowerCase().split(' ').join('-')}`} />
			</div>
		);
	}

	return <p>Inccorect category</p>;
}

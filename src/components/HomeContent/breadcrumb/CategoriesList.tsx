'use client';
import LinkList from '@/components/common/LinkList';
import { categories } from '@/utils';
import { usePathname } from 'next/navigation';

export function CategoriesList() {
  const pathname = usePathname();

  return <LinkList data={categories} urlMapper={(category) => `${pathname}/${category.href}`} />;
}

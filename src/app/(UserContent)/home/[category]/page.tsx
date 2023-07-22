import { CategoriesList } from '@/components/HomeContent/breadcrumb/CategoriesList';

function page() {
	return (
		<div className='w-[calc(100%-191px)] left-[191px] relative'>
			category primary page
			<CategoriesList />
		</div>
	);
}

export default page;

import Link from 'next/link';
import { Navigation } from '@/enums/navigation.enum';

const page = () => {
	return (
		<>
			<div className='w-[calc(100%-191px)] left-[191px] relative'>
				Here we need make any atricle to show some info about this content
				<Link href={Navigation.HomeProgramming}> Programming click here</Link>
			</div>
		</>
	);
};

export default page;

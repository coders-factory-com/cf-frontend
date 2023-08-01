import Link from 'next/link';
import { Navigation } from '@/enums/navigation.enum';

const page = () => {
	return (
		<>
			<div>
				Here we need make any atricle to show some info about this content
				<Link href={Navigation.HomeProgramming}> Programming click here</Link>
			</div>
		</>
	);
};

export default page;

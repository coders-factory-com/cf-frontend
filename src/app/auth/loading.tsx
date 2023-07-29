import Loader from '@/components/common/Loader';

function loading() {
	return (
		<div className=' relative h-screen flex flex-col justify-center items-center'>
			<Loader size='12' width='fit' />
		</div>
	);
}

export default loading;

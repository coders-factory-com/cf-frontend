import Loader from '@/components/common/Loader';

const loading = () => {
	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<Loader size='12' width='fit' />
		</div>
	);
};

export default loading;
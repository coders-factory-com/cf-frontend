import Loader from '@/components/common/Loader';

const loading = () => {
	return (
		<div className='w-full h-full min-h-[400px] flex flex-col justify-center items-center'>
			<Loader size='12' width='fit' />
		</div>
	);
};

export default loading;

import Loader from '@/common/Loader';

function loading() {
	return (
		<div className='w-[calc(100%-191px)] left-[191px] relative h-screen flex flex-col justify-center items-center'>
			<Loader size='12' />
		</div>
	);
}

export default loading;

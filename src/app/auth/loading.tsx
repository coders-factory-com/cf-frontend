import Loader from '@/components/common/Loader';

const loading = () => {
  return (
    <div className='flex h-full min-h-[400px] w-full flex-col items-center justify-center'>
      <Loader size='12' width='fit' />
    </div>
  );
};

export default loading;

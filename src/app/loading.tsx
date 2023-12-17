import Loader from '@/components/common/Loader';

const loading = () => {
  return (
    <div className=' flex h-screen w-full flex-col items-center justify-center'>
      <Loader size='12' width='fit' />
    </div>
  );
};

export default loading;

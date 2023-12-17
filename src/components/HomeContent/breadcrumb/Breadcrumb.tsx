interface BreadcrumbProps {
  text: string;
  index: number;
  handleClick: (index: number) => void;
}
const Breadcrumb = ({ text, index, handleClick }: BreadcrumbProps) => (
  <button onClick={() => handleClick(index)} className='inline-flex items-start justify-start bg-white'>
    <div className='flex items-start justify-start'>
      <div className='flex items-start justify-start'>
        <div className={`mx-1 text-[14px] font-normal leading-none tracking-wide text-neutral-600`}>{text}</div>
      </div>
      <div className='text-[14px] font-normal leading-none tracking-wide text-neutral-900'>/</div>
    </div>
  </button>
);
export default Breadcrumb;

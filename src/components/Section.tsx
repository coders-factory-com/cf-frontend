import Image from 'next/image';
interface SectionProps {
  title: string;
  timeRead: string;
  content: string;
  image?: string | null;
}

const Section = ({ title, timeRead, content, image }: SectionProps) => (
  <div
    id={title.replace(/\s+/g, '')}
    className='flex min-h-[600px] flex-col items-start justify-start gap-4 self-stretch'
  >
    <div className='inline-flex items-center justify-between self-stretch'>
      <div className='text-[20px] font-medium text-black'>{title}</div>
      <div className='flex items-start justify-start rounded-full bg-blue-100 px-2 py-1'>
        <div className='whitespace-nowrap text-center text-[12px] font-normal leading-none tracking-wide text-blue-700'>
          {timeRead} minutes read
        </div>
      </div>
    </div>
    <div className='self-strech flex flex-col items-start justify-center text-[14px] font-normal leading-normal text-neutral-700 '>
      {content}
      {!!image && (
        <Image
          width={2330}
          height={2330}
          className='mt-4 min-w-[300px] max-w-[600px]  object-contain'
          src={image}
          alt='placeholder'
        />
      )}
    </div>
  </div>
);

export default Section;

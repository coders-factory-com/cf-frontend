'use client';
import TopicCard from '@/components/TopicCard';
import { useState, PropsWithChildren } from 'react';
import { categories, topicCards } from '@/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ContentPage = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('selectedCard');
  const segment = pathname.split('/').filter((segment) => segment);
  const [selectedCard, setSelectedCard] = useState(search ?? 'Theory');
  const category = categories.find((category) => category.name.toLowerCase().split(' ').join('-') === segment[2]);

  if (!category) {
    return <p className='relative left-[270px] w-1/2'>Incorrect category</p>;
  }

  const subCategory = category.subcategories.find(
    (subCategory) => subCategory.name.toLowerCase().split(' ').join('-') === segment[3]
  );
  if (!subCategory) {
    return <p className='relative left-[270px] w-1/2'>Incorrect subcategory</p>;
  }

  const level = subCategory.levels.find((level) => level.toLowerCase().split(' ').join('-') === segment[4]);
  if (!level) {
    return <p className='relative left-[270px] w-1/2'>Incorrect level</p>;
  }

  const handleSelectCard = (card: string) => {
    push(`${pathname}?selectedCard=${card}`);
    setSelectedCard(card);
  };

  return (
    <>
      <header className='absolute left-[50px] top-[30px] flex flex-col items-start justify-start gap-2'>
        <div className=' text-[24px] font-medium text-black'>Functional data processing with streams</div>
        <div className='flex items-start justify-start gap-[1px]'>
          <div className='flex items-start justify-start gap-[1px]'>
            {topicCards.map((card, index) => (
              <TopicCard
                key={index}
                title={card.title}
                onClick={() => {
                  handleSelectCard(card.title);
                }}
                isActive={selectedCard === card.title}
              />
            ))}
          </div>
        </div>
      </header>
      <section className=' absolute top-[176px] w-full bg-neutral-50'>{children}</section>
    </>
  );
};

export default ContentPage;

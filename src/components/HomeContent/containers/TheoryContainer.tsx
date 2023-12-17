import Section from '../../Section';
import { cards, sections } from '@/utils';
import Card from '../../Card';
import ScrollProgressBar from '../../ScrollProgressBar';
import Notes from '../../Notes';

const TheoryContainer = () => {
  return (
    <>
      <div className='fixed right-20  top-[176px]  flex flex-col items-start justify-start'>
        <div className='relative h-fit w-full'>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} readTime={card.readTime} />
          ))}
          <ScrollProgressBar />
          <Notes />
        </div>
      </div>
      <div className='theoryContent left-[81px] top-[30px] ml-[10%]  flex flex-col items-start justify-start'>
        <div className='mb-48  flex flex-col items-start justify-start  gap-6 self-stretch border border-neutral-200 bg-white py-[42px]'>
          <div className='flex flex-col items-start justify-start gap-10 self-stretch px-6'>
            {sections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                timeRead={section.timeRead}
                content={section.content}
                image={section.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TheoryContainer;

import React from 'react';
import Section from '../Section';
import Image from 'next/image';
import { cards } from '@/utils';
import Card from '../Card';
import ScrollProgressBar from '../ScrollProgressBar';
import Notes from '../Notes';

function TheoryContent() {
	return (
		<div>
			<div className=' right-20 top-[176px]  fixed z-10 flex-col justify-start items-start flex'>
				<div className='w-full h-fit relative'>
					{cards.map((card, index) => (
						<Card key={index} title={card.title} readTime={card.readTime} />
					))}
					<ScrollProgressBar />
					<Notes />
				</div>
			</div>
			<div className=' left-[81px] ml-[10%] top-[30px]  flex-col justify-start items-start flex'>
				<div className='self-stretch  py-[42px] bg-white border  border-neutral-200 flex-col justify-start items-start gap-6 flex'>
					<div className='self-stretch px-6 flex-col justify-start items-start gap-10 flex'>
						<Section title='Introduction' timeRead='5'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							<br />
							<br />
							Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							<br />
							<br />
							Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia sS
							<div className='w-full mt-8 pb-3.5 justify-center items-center flex'>
								<Image width={374} height={261} src='/image3.png' alt='placeholder' />
							</div>
						</Section>
						<Section title='Code' timeRead='10'>
							<div className='self-stretch text-neutral-700 text-[14px] font-normal leading-normal'>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
								<br />
								<br />
								Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
								<br />
								<br />
								Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							</div>
							<Image width={800} height={400} className=' object-contain' src='/code.png' alt='' />
							<div className='self-stretch text-neutral-700 text-[14px] font-normal leading-normal'>
								Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
								<br />
								<br />
								Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							</div>
						</Section>
						<Section title='Good practice' timeRead='10'>
							<div className='self-stretch text-neutral-700 text-[14px] font-normal leading-normal'>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
								<br />
								<br />
								Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
								<br />
								<br />
								Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							</div>
							<div className='pt-0.5 pb-1.5 bg-[#383838] justify-center items-center flex'>
								<Image width={456} height={137} alt='' src='https://via.placeholder.com/456x137' />
							</div>
							<div className='self-stretch text-neutral-700 text-[14px] font-normal leading-normal'>
								Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
								<br />
								<br />
								Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							</div>
						</Section>
						<Section title='Summary' timeRead='1'>
							<div className='self-stretch text-neutral-700 text-[14px] font-normal leading-normal'>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							</div>
						</Section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TheoryContent;

import Breadcrumb from '@/components/Breadcrumb';
import Card from '@/components/Card';
import Section from '@/components/Section';
import TopicCard from '@/components/TopicCard';
import { breadcrumbs, cards, topicCards } from '@/utils';
import Image from 'next/image';

export default function Home() {
	return (
		<main className=' max-w-[100vw]  h-screen'>
			<div className='h-auto relative bg-white '>
				<div className=' right-20 top-[176px]  fixed z-10 flex-col justify-start items-start flex'>
					{cards.map((card, index) => (
						<Card key={index} borderColor={card.borderColor} title={card.title} readTime={card.readTime} />
					))}
					<div className='relative my-8 py-8 pl-4 pr-[30px] bg-orange-200 justify-start items-center flex'>
						<div className='text-black text-[14px] font-normal leading-none tracking-wide'>
							This is my first and
							<br />
							only note on this
							<br />
							page
						</div>
						<Image src='./Trash-can.svg' width={20} height={20} alt='' className='absolute bottom-2 right-2' />
					</div>
					<div className=' bg-white border w-full border-blue-600 flex-col justify-center items-center flex'>
						<div className=' py-4 justify-start items-center flex'>
							<div className='text-blue-600 text-[14px] font-normal leading-none tracking-wide'>Add Note +</div>
						</div>
					</div>
				</div>
				<div className='w-[calc(100%-191px)] left-[191px] top-[176px] absolute bg-neutral-50'>
					<div className='max-w-[1280px] '>
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
									<Section title='Good Practice' timeRead='10'>
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
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='left-[270px] top-[30px] absolute justify-start flex-col items-start gap-2 flex'>
					<div>
						{breadcrumbs.map((breadcrumb, index) => (
							<Breadcrumb key={index} textColor={breadcrumb.textColor} text={breadcrumb.text} />
						))}
					</div>
					<div className=' text-black text-[24px] font-medium'>Functional data processing with streams</div>
					<div className='justify-start items-start gap-[1px] flex'>
						<div className='justify-start items-start gap-[1px] flex'>
							{topicCards.map((card, index) => (
								<TopicCard key={index} color={card.color} title={card.title} />
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

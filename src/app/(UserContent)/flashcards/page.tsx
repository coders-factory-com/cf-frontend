import Flashcards from '@/components/Flashcards';
import getData from '@/utils/getData';

const page = async () => {
  const flashcards = await getData(`${process.env.BASE_URL}/api/flashcards`);

  return <Flashcards flashcards={flashcards} />;
};

export default page;

import Flashcards from '@/components/Flashcards';
import getData from '@/utils/getData';

const page = async () => {
	const flashcards = await getData('http://localhost:3000/api/flashcards');

	return <Flashcards flashcards={flashcards} />;
};

export default page;

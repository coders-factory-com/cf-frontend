import { flashcardCategories } from '@/services/get-flashcards';

export async function GET() {
	return new Response(JSON.stringify(flashcardCategories), {
		headers: { 'Content-Type': 'application/json' },
	});
}

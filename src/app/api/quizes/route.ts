import { quizData } from "@/services/get-quizzes";

export async function GET() {
	return new Response(JSON.stringify(quizData), {
		headers: { 'Content-Type': 'application/json' },
	});
}

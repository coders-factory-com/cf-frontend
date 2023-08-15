// interface FileProps {
//     name: string;
//     language: string;
//     task: string;
// }
//
// interface MarkerProps {
//     message: string;
// }

declare module 'openai-edge' {
	export const Configuration: any;
	export const OpenAIApi: any;
}

interface BreadcrumbType {
	text: string;
	href: string;
}

type ErrorSchema = z.infer<typeof x>;

interface Flashcard {
	id: number;
	title: string;
	answer: string;
}
interface Category {
	id: number;
	name: string;
	flashcards: Flashcard[];
}

interface Task {
	id: number;
	correctAnswerId: number;
}

interface Quiz {
	quizId: number;
	quizTitle: string;
	tasks: Task[];
}

interface Tech {
	IconComponent?: IconType;
	backgroundColor?: string;
	color?: string;
	modalContent?: string;
}

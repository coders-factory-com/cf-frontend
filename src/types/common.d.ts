// interface FileProps {
//     name: string;
//     language: string;
//     task: string;
// }
//
// interface MarkerProps {
//     message: string;
// }

import { IconType } from 'react-icons/lib';

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

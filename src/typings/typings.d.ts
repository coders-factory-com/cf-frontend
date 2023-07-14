interface BreadcrumbProps {
	textColor: string;
	text: string;
}

interface CardProps {
	title: string;
	readTime: string;
}

interface NavbarIconsProps {
	iconSrc: string;
	text: string;
	path: string;
}

interface SectionProps {
	title: string;
	timeRead: string;
	content: string;
	image?: string | null;
}

interface TopicCardProps {
	title: string;
	onClick: () => void;
	isActive: boolean;
}

interface ReadOnlyCheckboxProps {
	text: string;
	isChecked: boolean;
}

interface AnswerCheckboxProps {
	taskId: number;
	id: number;
	text: string;
	isChecked: boolean;
	onAnswerSelected: (id: number) => void;
	submitted: boolean;
	quizId: number;
}

interface QuizTaskProps {
	task: {
		id: number;
		question: string;
		description: string;
		options: [{ id: number; text: string }];
		correctAnswerId: number;
	};
	selectedAnswer: number;
	onAnswerSelected: (id: number) => void;
	submitted: boolean;
	errors: { [quizId: number]: { [taskId: number]: string } };
	quizId: number;
}

interface ButtonProps {
	text: string;
	type?: 'submit' | 'button';
	onClick?: () => void;
	className?: string;
}

interface FileProps {
	name: string;
	language: string;
	task: string;
}

interface MarkerProps {
	message: string;
}

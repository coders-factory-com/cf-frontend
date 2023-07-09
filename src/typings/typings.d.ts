export interface BreadcrumbProps {
	textColor: string;
	text: string;
}

export interface CardProps {
	title: string;
	readTime: string;
}

export interface NavbarIconsProps {
	iconSrc: string;
	text: string;
	path: string;
}

interface SectionProps {
	title: string;
	timeRead: string;
	children: ReactNode;
}

interface TopicCardProps {
	color: string;
	title: string;
}

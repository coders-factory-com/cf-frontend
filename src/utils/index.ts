import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io';
import { FaJava } from 'react-icons/fa';
import { DiRuby, DiSwift, DiPhp } from 'react-icons/di';
import { SiGo } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { Navigation } from '@/enums/navigation.enum';

export const cards = [
	{ title: 'Introduction', readTime: '5' },
	{ title: 'Code', readTime: '10' },
	{ title: 'Good practice', readTime: '5' },
	{ title: 'Summary', readTime: '1' },
];

export const navbarIcons = [
	{ iconSrc: '/Home.svg', text: 'Home', path: '/home' },
	{ iconSrc: '/IBM-cloud.svg', text: 'Study plan', path: '/study_plan' },
	{ iconSrc: '/Virtual-private.svg', text: 'Quizes', path: '/quizes' },
	{ iconSrc: '/IBM-z-cloud.svg', text: 'Other', path: '/other' },
	{ iconSrc: '/IBM--power-vs.svg', text: 'Flashcards', path: '/flashcards' },
];

export const categories = [
	{
		name: 'Frontend Development',
		href: 'frontend-development',
		subcategories: [
			{ name: 'HTML', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'CSS', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'JavaScript', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'React', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Angular', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Vue', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Backend Development',
		href: 'backend-development',
		subcategories: [
			{ name: 'Node.js', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Python', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Java', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Ruby', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'PHP', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Go', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Full Stack Development',
		href: 'fullstack-development',
		subcategories: [
			{ name: 'MERN Stack', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'MEAN Stack', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'MEVN Stack', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'LAMP Stack', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Data Science',
		href: 'data-science',
		subcategories: [
			{ name: 'R', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Python', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Machine Learning', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Data Visualization', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Machine Learning',
		href: 'machine-learning',
		subcategories: [
			{ name: 'Python', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Deep Learning', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Natural Language Processing', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Artificial Intelligence',
		href: 'artificial-intelligence',
		subcategories: [
			{ name: 'Python', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Machine Learning', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Deep Learning', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Computer Vision', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Cloud Computing',
		href: 'cloud-computing',
		subcategories: [
			{ name: 'AWS', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Azure', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Google Cloud', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'DevOps',
		href: 'devops',
		subcategories: [
			{ name: 'CI/CD', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Docker', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Kubernetes', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Cybersecurity',
		href: 'cybersecurity',
		subcategories: [
			{ name: 'Network Security', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Web Security', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Ethical Hacking', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Mobile App Development',
		href: 'mobile-app-development',
		subcategories: [
			{ name: 'Android Development', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'iOS Development', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'React Native', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Game Development',
		href: 'game-development',
		subcategories: [
			{ name: 'Unity', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Unreal Engine', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'C#', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Databases',
		href: 'databases',
		subcategories: [
			{ name: 'SQL', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'NoSQL', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'PostgreSQL', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'MongoDB', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
	{
		name: 'Software Testing',
		href: 'software-testing',
		subcategories: [
			{ name: 'Unit Testing', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'Integration Testing', levels: ['Beginner', 'Intermediate', 'Advanced'] },
			{ name: 'End-to-End Testing', levels: ['Beginner', 'Intermediate', 'Advanced'] },
		],
	},
];

export const topicCards = [{ title: 'Theory' }, { title: 'Tasks' }, { title: 'Quizes' }, { title: 'Other' }];

export const notes = [
	{
		id: 1,
		content: 'This is my first note on this page',
	},
	{
		id: 2,
		content: 'This is my second note on this page',
	},
];

export const sections = [
	{
		title: 'Introduction',
		timeRead: '5',
		content:
			'This write-up captures what I teach when I get coaching requests. I won’t jump into the code or a setup of any sort. I will teach concepts  If you work in a software development company as a non-programmer, you may wonder what the programmers do. And you hear new buzzwords everyday. This post was written with you in mind. Whether you are a sales person, a medical doctor, attorney, a business lead, or an accountant, if you’ve ever had it in mind to learn how to code, this is a good place to start.  How this article is organizedThis write-up is divided into 4 parts. After reading through each part, you will find a quiz section to help you better recall what you’ve read. Then you’ll find a “going forward” section and answers to the quiz.Note that each buzzword introduced in this series is in bold , such as algorithm.',
		image: '/image3.png',
	},
	{
		title: 'Code',
		timeRead: '10',
		content: 'This write-up captures what I teach when I get coaching requests...',
		image: '/code.png',
	},
	{
		title: 'Good practice',
		timeRead: '5',
		content: 'This write-up captures what I teach when I get coaching requests...',
		image: 'https://via.placeholder.com/456x137',
	},
	{
		title: 'Summary',
		timeRead: '1',
		content: 'This write-up captures what I teach when I get coaching requests...',
		image: null,
	},
];

export const quizAnswers = [
	{ text: 'Map', isChecked: true },
	{ text: 'Checkbox', isChecked: false },
	{ text: 'District', isChecked: true },
	{ text: 'Other', isChecked: false },
	{ text: 'New', isChecked: false },
];

export const files = {
	name: 'script.js',
	language: 'javascript',
	task: 'someJSCodeExample',
};

export const technologies = [
	{ IconComponent: IoLogoJavascript, backgroundColor: '#ffde25' },
	{ IconComponent: CgCPlusPlus, backgroundColor: '#5c8dbc', color: 'white' },
	{ IconComponent: DiPhp, backgroundColor: '#0d2137', color: 'white' },
	{ IconComponent: SiGo, backgroundColor: '#0d2137', color: '#00acd7' },
	{ IconComponent: DiSwift, backgroundColor: '#f5803b ', color: 'white' },
	{ IconComponent: FaJava },
	{ IconComponent: IoLogoHtml5, color: 'white', backgroundColor: '#ef652a ' },
	{ IconComponent: DiRuby, backgroundColor: '#0d2137', color: '#ab1401' },
];

export const links = [
    { path: Navigation.Courses, label: 'Course Library' },
    { path: Navigation.Resources, label: 'Resources' },
    { path: Navigation.Community, label: 'Community' },
    { path: Navigation.Challenges, label: 'Challenges' },
  ];
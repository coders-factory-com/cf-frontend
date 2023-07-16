export const cards = [
	{ title: 'Introduction', readTime: '5' },
	{ title: 'Code', readTime: '10' },
	{ title: 'Good practice', readTime: '5' },
	{ title: 'Summary', readTime: '1' },
];

export const navbarIcons = [
	{ iconSrc: '/Home.svg', text: 'Home', path: '/' },
	{ iconSrc: '/IBM-cloud.svg', text: 'Study plan', path: '/study_plan' },
	{ iconSrc: '/Virtual-private.svg', text: 'Quizes', path: '/quizes' },
	{ iconSrc: '/IBM-z-cloud.svg', text: 'Other', path: '/other' },
	{ iconSrc: '/IBM--power-vs.svg', text: 'Flashcards', path: '/flashcards' },
];

export const breadcrumbsData = [{ text: 'Home' }, { text: 'Technology' }, { text: 'Programming' }, { text: 'Javascript' }, { text: 'Basics' }];

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

export const quizData = [
	{
		quizId: 1,
		quizTitle: 'JavaScript Basics Quiz',
		tasks: [
			{
				id: 1,
				question: 'What is a closure in JavaScript?',
				description: 'A closure is a function having access to the parent scope, even after the parent function has closed.',
				options: [
					{ id: 1, text: 'A type of loop.' },
					{ id: 2, text: 'A type of variable.' },
					{ id: 3, text: 'A function with access to the parent scope.' },
					{ id: 4, text: 'An error in code.' },
				],
				correctAnswerId: 3,
			},
			{
				id: 2,
				question: "What is 'this' keyword in JavaScript?",
				description: "'this' keyword refers to the object it belongs to.",
				options: [
					{ id: 1, text: 'Refers to the global object.' },
					{ id: 2, text: 'Refers to the current object.' },
					{ id: 3, text: 'Refers to the previous object.' },
					{ id: 4, text: 'Refers to the next object.' },
				],
				correctAnswerId: 2,
			},
			{
				id: 3,
				question: 'What is a promise in JavaScript?',
				description: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation.',
				options: [
					{ id: 1, text: 'A tool for handling exceptions.' },
					{ id: 2, text: 'A tool for managing asynchronous operations.' },
					{ id: 3, text: 'A tool for iterating over arrays.' },
					{ id: 4, text: 'A tool for parsing JSON.' },
				],
				correctAnswerId: 2,
			},
			{
				id: 4,
				question: 'What does JSON stand for?',
				description: 'JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy to read and write.',
				options: [
					{ id: 1, text: 'JavaScript Object Notation.' },
					{ id: 2, text: 'JavaScript Online Notation.' },
					{ id: 3, text: 'JavaScript Offline Notation.' },
					{ id: 4, text: 'JavaScript Onsite Notation.' },
				],
				correctAnswerId: 1,
			},
			{
				id: 5,
				question: 'What are the primitive types in JavaScript?',
				description: 'JavaScript has six primitive types: string, number, bigint, boolean, undefined, and symbol. There is also one special type: null.',
				options: [
					{ id: 1, text: 'string, number, boolean, undefined, null' },
					{ id: 2, text: 'string, number, boolean, undefined, symbol' },
					{ id: 3, text: 'string, number, boolean, undefined, symbol, bigint, null' },
					{ id: 4, text: 'string, number, boolean, undefined, bigint, null' },
				],
				correctAnswerId: 3,
			},
		],
	},
	{
		quizId: 2,
		quizTitle: 'HTML Basics Quiz',
		tasks: [
			{
				id: 1,
				question: 'What does HTML stand for?',
				description: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for documents designed to be displayed in a web browser.',
				options: [
					{ id: 1, text: 'HyperText Markup Language.' },
					{ id: 2, text: 'Hyper Text Making Language.' },
					{ id: 3, text: 'Hyper Transfer Markup Language.' },
					{ id: 4, text: 'Hyper Text Management Language.' },
				],
				correctAnswerId: 1,
			},
			{
				id: 2,
				question: 'What is the purpose of the <head> tag in HTML?',
				description: 'The <head> tag is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.',
				options: [
					{ id: 1, text: 'To provide metadata about the HTML document.' },
					{ id: 2, text: 'To create the main content of the HTML document.' },
					{ id: 3, text: 'To specify the footer of the HTML document.' },
					{ id: 4, text: 'To include images in the HTML document.' },
				],
				correctAnswerId: 1,
			},
			{
				id: 3,
				question: 'What is the correct HTML for referring to an external JavaScript file?',
				description: 'To refer to an external JavaScript file in HTML, the <script src=""> tag is used where src attribute contains the path to the JavaScript file.',
				options: [
					{ id: 1, text: '<javascript src="myfile.js">' },
					{ id: 2, text: '<script href="myfile.js">' },
					{ id: 3, text: '<script link="myfile.js">' },
					{ id: 4, text: '<script src="myfile.js">' },
				],
				correctAnswerId: 4,
			},
			{
				id: 4,
				question: 'What is the correct HTML for making a checkbox?',
				description: 'The <input> tag with type attribute as "checkbox" is used for making checkboxes in HTML.',
				options: [
					{ id: 1, text: '<input type="check">' },
					{ id: 2, text: '<input type="checkbox">' },
					{ id: 3, text: '<checkbox>' },
					{ id: 4, text: '<check>' },
				],
				correctAnswerId: 2,
			},
			{
				id: 5,
				question: 'What is the purpose of the <!DOCTYPE html> declaration?',
				description: 'The <!DOCTYPE> declaration is not an HTML tag. It is an information to the browser about what version of HTML the page is written in.',
				options: [
					{ id: 1, text: 'It is a declaration to use HTML5.' },
					{ id: 2, text: 'It is a tag to style HTML.' },
					{ id: 3, text: 'It is an instruction to include external JavaScript file.' },
					{ id: 4, text: 'It is a tag to include images in HTML.' },
				],
				correctAnswerId: 1,
			},
		],
	},
	{
		quizId: 3,
		quizTitle: 'CSS Basics Quiz',
		tasks: [
			{
				id: 1,
				question: 'What does CSS stand for?',
				description: 'CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the look and formatting of a document written in HTML.',
				options: [
					{ id: 1, text: 'Cascading Style Sheets.' },
					{ id: 2, text: 'Colorful Style Sheets.' },
					{ id: 3, text: 'Creative Style Sheets.' },
					{ id: 4, text: 'Computer Style Sheets.' },
				],
				correctAnswerId: 1,
			},
			{
				id: 2,
				question: 'How to include CSS styles in HTML?',
				description: 'There are three ways to include CSS in HTML: inline, internal, and external. External CSS is linked using the link tag.',
				options: [
					{ id: 1, text: '<style src="style.css">' },
					{ id: 2, text: '<link rel="stylesheet" href="style.css">' },
					{ id: 3, text: '<css src="style.css">' },
					{ id: 4, text: '<link src="style.css">' },
				],
				correctAnswerId: 2,
			},
			{
				id: 3,
				question: 'What is a CSS selector?',
				description: 'A CSS selector is the part of a CSS rule set that selects the HTML element(s) that you want to style.',
				options: [
					{ id: 1, text: 'A HTML tag.' },
					{ id: 2, text: 'A function in CSS.' },
					{ id: 3, text: 'The part of CSS rule set to select HTML element.' },
					{ id: 4, text: 'A CSS property.' },
				],
				correctAnswerId: 3,
			},
			{
				id: 4,
				question: 'What is the purpose of a CSS comment?',
				description: 'CSS comments are used to explain CSS code, and may help when you edit the source code at a later date. They are ignored by the browser.',
				options: [
					{ id: 1, text: 'To show messages in the console.' },
					{ id: 2, text: 'To explain and make the code more readable.' },
					{ id: 3, text: 'To stop the execution of code.' },
					{ id: 4, text: 'To hide the code from the browser.' },
				],
				correctAnswerId: 2,
			},
			{
				id: 5,
				question: 'How do you add a background color in CSS?',
				description: 'In CSS, to set a background color, you use the "background-color" property.',
				options: [
					{ id: 1, text: 'color: red;' },
					{ id: 2, text: 'bg-color: red;' },
					{ id: 3, text: 'background-color: red;' },
					{ id: 4, text: 'bgcolor: red;' },
				],
				correctAnswerId: 3,
			},
		],
	},
];

export const mainPagePhotoData = [{ image: 'https://via.placeholder.com/400x400' }, { image: 'https://via.placeholder.com/400x400' }, { image: 'https://via.placeholder.com/400x400' }, { image: 'https://via.placeholder.com/400x400' }];

export const files = {
	name: 'script.js',
	language: 'javascript',
	task: 'someJSCodeExample',
};

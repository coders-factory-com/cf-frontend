
type BreadcrumbType = {
	text: string;
	href: string;
};











interface FileProps {
	name: string;
	language: string;
	task: string;
}

interface MarkerProps {
	message: string;
}

interface InputProps {
	icon?: ReactNode;
	placeholder: string;
	isPassword?: boolean;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type ErrorSchema = z.infer<typeof x>;

interface Item {
	toLowerCase?: any;
	name: string;
	href?: string;
	subcategories?: Array<Item>;
	levels?: Array<string>;
}

interface LinkListProps {
	data: Array<Item>;
	urlMapper: (item: Item) => string;
}

interface Session extends NextAuthSession {
    jwt: string;
  }
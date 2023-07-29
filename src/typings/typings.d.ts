
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
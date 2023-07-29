interface Item {
    toLowerCase?: any;
    name: string;
    href?: string;
    subcategories?: Array<Item>;
    levels?: Array<string>;
}
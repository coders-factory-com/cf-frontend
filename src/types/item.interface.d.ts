interface Item {
  toLowerCase?: string;
  name: string;
  href?: string;
  subcategories?: Array<Item>;
  levels?: Array<string>;
}

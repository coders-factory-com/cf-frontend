// interface FileProps {
//     name: string;
//     language: string;
//     task: string;
// }
//
// interface MarkerProps {
//     message: string;
// }

type BreadcrumbType = {
    text: string;
    href: string;
};

type ErrorSchema = z.infer<typeof x>

import Link from 'next/link';
import { Navigation } from '@/enums/navigation.enum';
import { SOCIAL_PROVIDER_REACT_ICONS } from '@/constants/social-provider-react-icons';

interface FooterSectionInterface  {
	section: string;
	links: { label: string; href: string }[];
};

const FooterSection = ({ section, links }: FooterSectionInterface) => (
	<div className="flex flex-col space-y-3">
		<h1 className="text-xl font-bold opacity-50 text-white">{section}</h1>
		<ul className="flex flex-col space-y-2 font-semibold text-white">
			{links.map((link) => (
				<li key={link.label}>
					<Link
						className="hover:opacity-60 transition duration-200"
						href={link.href}
					>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	</div>
);

const SocialIcons = () => (
		<div className="inline-flex gap-x-5 text-2xl">
				{SOCIAL_PROVIDER_REACT_ICONS.map(provider => (

					<Link
					key={provider.provider}
					href={provider.href}
					>
					{provider.src}
				</Link>
					))}

		</div>
);

function Footer() {
	const FOOTER_NAVIGATION: FooterSectionInterface[] = [
		{
			section: 'Company',
			links: [
				{ label: 'Blog', href: '#' },
				{ label: 'About Us', href: '#' },
				{ label: 'Contact', href: '#' },
				{ label: 'Services', href: '#' },
				{ label: 'FAQ', href: '#' },
			],
		},
		{
			section: 'About',
			links: [
				{ label: 'Blog', href: '#' },
				{ label: 'About Us', href: '#' },
				{ label: 'Contact', href: '#' },
				{ label: 'Services', href: '#' },
				{ label: 'FAQ', href: '#' },
			],
		},
		{
			section: 'Contact',
			links: [
				{ label: 'Blog', href: '#' },
				{ label: 'About Us', href: '#' },
				{ label: 'Contact', href: '#' },
				{ label: 'Services', href: '#' },
				{ label: 'FAQ', href: '#' },
			],
		},
	];

	return (
		<div className="w-full flex justify-center py-12">
			<footer className="max-w-[1920px] flex justify-between w-full px-12 md:px-24 flex-wrap">
				<div className="w-full pb-6 md:w-auto flex flex-col items-start">
					<div className='space-y-4 flex md:flex-col w-full justify-between items-start'>
						<div>
							<Link
								className="flex items-center justify-center font-bold text-2xl"
								href={Navigation.Main}
								>
								<div className="p-0.5 mr-1 bg-white rounded justify-center h-fit items-center gap-2.5 flex">
									<div className="text-black text-[14px] font-semibold leading-none tracking-wide">
										&lt;/&gt;
									</div>
								</div>
								Coders-Factory
							</Link>
							<p className="text-sm">© 2023 Coders-Factory</p>
						</div>

						<SocialIcons />
					</div>
				</div>

				{FOOTER_NAVIGATION.map((section) => (
					<FooterSection
						key={section.section}
						section={section.section}
						links={section.links}
					/>
				))}

			</footer>
		</div>
	);
}

export default Footer;

import Link from 'next/link';
import { Navigation } from '@/enums/navigation.enum';
import { SOCIAL_PROVIDER_REACT_ICONS } from '@/constants/social-provider-react-icons';

interface FooterSectionInterface {
  section: string;
  links: { label: string; href: string }[];
}

const FooterSection = ({ section, links }: FooterSectionInterface) => (
  <div className='flex flex-col space-y-3'>
    <h1 className='text-xl font-bold text-white opacity-50'>{section}</h1>
    <ul className='flex flex-col space-y-2 font-semibold text-white'>
      {links.map((link) => (
        <li key={link.label}>
          <Link className='transition duration-200 hover:opacity-60' href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcons = () => (
  <div className='inline-flex gap-x-5 text-2xl'>
    {SOCIAL_PROVIDER_REACT_ICONS.map((provider) => (
      <Link key={provider.provider} href={provider.href}>
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
    <div className='flex w-full justify-center py-12'>
      <footer className='flex w-full max-w-[1920px] flex-wrap justify-between px-12 md:px-24'>
        <div className='flex w-full flex-col items-start pb-6 md:w-auto'>
          <div className='flex w-full items-start justify-between space-y-4 md:flex-col'>
            <div>
              <Link className='flex items-center justify-center text-2xl font-bold' href={Navigation.Main}>
                <div className='mr-1 flex h-fit items-center justify-center gap-2.5 rounded bg-white p-0.5'>
                  <div className='text-[14px] font-semibold leading-none tracking-wide text-black'>&lt;/&gt;</div>
                </div>
                Coders-Factory
              </Link>
              <p className='text-sm'>© 2023 Coders-Factory</p>
            </div>

            <SocialIcons />
          </div>
        </div>

        {FOOTER_NAVIGATION.map((section) => (
          <FooterSection key={section.section} section={section.section} links={section.links} />
        ))}
      </footer>
    </div>
  );
}

export default Footer;

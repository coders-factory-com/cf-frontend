import { SocialsLinks } from "@/enums/socials.enum";

export const SOCIAL_PROVIDER_ICONS = [
	{
		src: '/provider/facebook.svg',
		alt: 'facebook icon',
		href: SocialsLinks.Facebook,
		provider: 'facebook',
	},
	{
		src: '/provider/google.svg',
		alt: 'google icon',
		href: SocialsLinks.Google,
		provider: 'google',
	},
	{
		src: '/provider/linkedin.svg',
		alt: 'linkedin icon',
		href: SocialsLinks.LinkedIn,
		provider: 'linkedin',
	},
	{
		src: '/provider/github.svg',
		alt: 'github icon',
		href: SocialsLinks.Github,
		provider: 'github',
	},
] as const;

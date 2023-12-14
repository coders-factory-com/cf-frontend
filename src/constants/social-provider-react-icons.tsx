import { SocialsLinks } from "@/enums/socials.enum";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

export const SOCIAL_PROVIDER_REACT_ICONS = [
	{
		src: <FaFacebook />,
		alt: 'facebook icon',
        href: SocialsLinks.Facebook,
		provider: 'facebook',
	},
	{
		src: <FaGoogle />,
		alt: 'google icon',
        href: SocialsLinks.Google,
		provider: 'google',
	},
	{
		src: <FaLinkedin />,
		alt: 'linkedin icon',
        href: SocialsLinks.LinkedIn,
		provider: 'linkedin',
	},
	{
		src: <FaGithub />,
		alt: 'github icon',
        href: SocialsLinks.Github,
		provider: 'github',
	},
] as const;
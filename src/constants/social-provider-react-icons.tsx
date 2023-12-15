import { SocialsLinks } from "@/enums/socials.enum";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebook, FaFacebookSquare, FaGithub, FaGithubSquare, FaGoogle, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";

export const SOCIAL_PROVIDER_REACT_ICONS = [
	{
		src: <FaFacebookSquare />,
		alt: 'facebook icon',
        href: SocialsLinks.Facebook,
		provider: 'facebook',
	},
	{
		src: <FaGooglePlusSquare />,
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
		src: <FaGithubSquare />,
		alt: 'github icon',
        href: SocialsLinks.Github,
		provider: 'github',
	},
] as const;
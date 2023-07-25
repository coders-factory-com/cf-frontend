import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { User as NextAuthUser, Account as NextAuthAccount, Profile } from 'next-auth';

const authOptions = {
	providers: [
		LinkedInProvider({
			clientId: process.env.LINKEDIN_CLIENT_ID || '',
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID || '',
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async credentials => {
				try {
					const res = await fetch('http://java-backend-url.com/login', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							username: credentials?.username,
							password: credentials?.password,
						}),
					});
					const user = await res.json();
					if (user) {
						return { id: user.data.id, name: user.data.name, email: user.data.email, jwt: user.data.jwt };
					} else {
						return null;
					}
				} catch (error) {
					console.log(error);
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/signup',
	},
	// callbacks: {
	// 	async signIn({ user, account }: { user: NextAuthUser; account: NextAuthAccount | null }) {
	// 		if (account) {
	// 			const { provider } = account;

	// 			if (['google', 'linkedin', 'facebook', 'github'].includes(provider)) {
	// 				try {
	// 					const url = `http://url.com/${provider}-signin`;

	// 					const response = await fetch(url, {
	// 						method: 'POST',
	// 						headers: { 'Content-Type': 'application/json' },
	// 						body: JSON.stringify({ token: account.accessToken }),
	// 					});

	// 					if (response.status === 200) {
	// 						return true;
	// 					} else {
	// 						return false;
	// 					}
	// 				} catch (error) {
	// 					console.error(`Error during ${provider} authentication: `, error);
	// 					return false;
	// 				}
	// 			}
	// 		}
	// 		return true;
	// 	},
	// 	async jwt(token: { jwt: string }, user: { jwt: string }) {
	// 		if (user) {
	// 			token.jwt = user.jwt;
	// 		}
	// 		return token;
	// 	},
	// 	async session(session: { jwt: string }, userOrToken: { jwt: string }) {
	// 		session.jwt = userOrToken.jwt;
	// 		return session;
	// 	},
	// },
};

const handler = (NextAuth as any)(authOptions);

export { handler as GET, handler as POST };

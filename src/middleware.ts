export { default } from 'next-auth/middleware';

export const config = {
	matcher: ['/home/:path*', '/study_plan/:path*', '/quizes/:path*', '/other/:path*', '/flashcards/:path*', '/user/:path*'],
};

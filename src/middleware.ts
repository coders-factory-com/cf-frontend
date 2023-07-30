import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
	function middleware(req: NextRequest) {
		if (req.cookies.get('next-auth.session-token') && req.nextUrl.pathname === '/') {
			const url = req.nextUrl.origin;
			return NextResponse.redirect(`${url}/home`);
		}
		return NextResponse.next();
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
);

export const config = {
	matcher: ['/home/:path*', '/study_plan/:path*', '/quizes/:path*', '/other/:path*', '/flashcards/:path*', '/user/:path*'],
};

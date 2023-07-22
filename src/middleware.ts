import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './app/api/auth/[...nextauth]/route';
export async function middleware() {
	// const session = await getServerSession(authOptions);
	// if (!session) {
	// 	return NextResponse.redirect(`/auth/signup`);
	// }
	// return NextResponse.next();
}

export const config = {
	matcher: '/home/:path*',
};

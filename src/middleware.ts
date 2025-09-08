import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

// Define protected API routes and their allowed roles
const protectedRoutes = [
  { path: '/api/patients', roles: ['ADMIN', 'DOCTOR'] },
  { path: '/api/appointments', roles: ['ADMIN', 'DOCTOR', 'PATIENT'] },
  { path: '/api/health-records', roles: ['ADMIN', 'DOCTOR', 'PATIENT'] },
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the requested path is protected
  const protectedRoute = protectedRoutes.find(route => pathname.startsWith(route.path));
  
  if (protectedRoute) {
    const token = await getToken({ req: request });
    
    // Redirect to login if not authenticated
    if (!token) {
      const url = new URL('/login', request.url);
      url.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(url);
    }

    // Check if user has the required role
    const hasRequiredRole = protectedRoute.roles.includes(token.role);
    
    if (!hasRequiredRole) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware will run on
export const config = {
  matcher: [
    '/api/patients/:path*',
    '/api/appointments/:path*',
    '/api/health-records/:path*',
  ],
};

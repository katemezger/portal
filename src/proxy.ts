import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)", "/api/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    const session = await auth();
    
    // Fallback if not logged in
    if (!session.userId) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Read custom role metadata from Clerk session
    const role = session.sessionClaims?.metadata?.role;
    const allowedRoles = ['REVIEWER', 'ORGANIZER', 'SUPER_ADMIN'];
    
    if (!role || !allowedRoles.includes(role as string)) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
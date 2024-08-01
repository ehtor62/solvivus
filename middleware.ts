import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/', '/api/webhook(.*)', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) => {

  if (!isPublicRoute(request)) {

    auth().protect();
  }
}, { debug: true });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};




import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)'])
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, req) => {

  // grab auth info so it can be used later for checks
  const a = await auth()

  // fake placeholder
  const bypassAuth = false

  if (!isPublicRoute(req) && !bypassAuth) {
    // you don't need auth.redirectToSignIn() here -- auth.protect() will do all of that
    await auth.protect();
  }

  // if the rooute is public and there is signed in user the redirect to /product-modals
  if (isPublicRoute(req) && a.userId) {
    const url = new URL('/product-models', req.url)
    return NextResponse.redirect(url)
  }

  // if there is no signed in user and it is a public route the user will view that route
  // no need to do anything etc

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}

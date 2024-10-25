import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)','/api/sendSms'],
  ignoredRoutes: ['/chatbot'],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ['/api/:path*'],
});

  // '/trpc/:path*'], 
  // redirectTo: '/login', 
  // afterAuth: {
  //   redirectTo: '/dashboard', 
  //   name: 'Dashboard'
  // }, 
  // afterSignOut: {
  //   redirectTo: '/', 
  //   name: 'Home'
  // }, 
  // afterError: {
  //   redirectTo: '/error', 
  //   name: 'Error'
  // }, 
  // clerkOptions: {
  //   signInPage: '/login', 
  //   signUpPage: '/sign-up', 
  //   forgotPasswordPage: '/forgot-password', 
  //   magicLinkPage: '/magic-link', 
  //   errorPage: '/error', 
  //   verifyEmailPage: '/verify-email', 
  //   social: ['github', 'google', 'facebook', 'twitter', 'linkedin', 'microsoft', 'apple'],
  //   primaryAuthenticators: ['email', 'password'],
 // }
//]});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

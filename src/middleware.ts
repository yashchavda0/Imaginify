import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/api/webhooks/test', '/api/webhooks/clerk'],
    ignoredRoutes: ['/', '/api/webhooks/test', '/api/webhooks/clerk'],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
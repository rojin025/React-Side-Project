import { auth } from '@/app/_lib/auth';
/**
 * auth to middleware explicit way of defining
 */
export const middleware = auth;

/**
 * Protected route matcher
 */
export const config = {
  matcher: ['/account'],
};

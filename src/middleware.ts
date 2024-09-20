import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'en-US'
});
 
export const config = {
  matcher: ['/', '/(pt-BR|en-US)/:path*']
};
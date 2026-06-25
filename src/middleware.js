import { NextResponse } from 'next/server';
import { LANG_ROUTES } from '@/lib/i18n';

const VALID_PATHS = new Set(['/', LANG_ROUTES.pt, `${LANG_ROUTES.pt}/`]);

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (VALID_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith(`${LANG_ROUTES.pt}/`)) {
    return NextResponse.redirect(new URL(LANG_ROUTES.pt, request.url));
  }

  return NextResponse.redirect(new URL(LANG_ROUTES.en, request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

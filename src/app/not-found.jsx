'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LANG_ROUTES } from '@/lib/i18n';

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const destination = pathname?.startsWith(LANG_ROUTES.pt)
      ? LANG_ROUTES.pt
      : LANG_ROUTES.en;
    router.replace(destination);
  }, [pathname, router]);

  return null;
}

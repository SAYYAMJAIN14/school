"use client";

import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  // Don't show footer on admin-related pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} School Memories Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

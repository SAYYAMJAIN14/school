"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookMarked, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/notices', label: 'Notices' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Don't show header on admin login page
  if (pathname === '/admin/login') {
    return null;
  }
  
  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 text-sm font-medium", className)}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            'transition-colors hover:text-primary',
            pathname.startsWith(item.href) ? 'text-primary' : 'text-muted-foreground'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <BookMarked className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">School Memories Hub</span>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <NavLinks />
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/login">Admin Login</Link>
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <div className="p-4">
                 <Link href="/" className="mr-6 flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <BookMarked className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">School Memories Hub</span>
                </Link>
                <div className="flex flex-col gap-4">
                   {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname.startsWith(item.href) ? 'text-primary' : 'text-foreground'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="/admin/login">Admin Login</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

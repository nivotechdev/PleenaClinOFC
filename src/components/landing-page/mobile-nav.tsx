'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#specialties', label: 'Nossos Serviços' },
  { href: '#team', label: 'Equipe' },
  { href: '#location', label: 'Contato' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            'rounded-full h-10 w-10 transition-colors text-primary bg-transparent hover:bg-accent/50'
          )}
        >
          <Menu className="h-6 w-6"/>
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background text-foreground p-0 w-full max-w-md">
        <div className="flex flex-col h-full">
            <div className="p-6 flex justify-between items-center border-b">
                 <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="PlenaClin Logo"
                      width={160}
                      height={35}
                      className="h-9 w-auto logo-treatment"
                    />
                 </Link>
                <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Fechar</span>
                    </Button>
                </SheetClose>
            </div>
          <nav className="flex-1 flex flex-col justify-center p-6">
            <ul className="space-y-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './navigation';
import { MobileNav } from './mobile-nav';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappUrl = "https://wa.me/5551995536007?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

  useEffect(() => {
    const handleScroll = () => {
      // Activate "scrolled" state after 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check on initial load
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[0.22,1,0.36,1]',
        'pt-2'
      )}
    >
      {/* Desktop Pill Container */}
      <div
        className={cn(
          'mx-auto hidden md:grid grid-cols-3 items-center rounded-full transition-all duration-500 ease-[0.22,1,0.36,1]',
          'border',
          isScrolled
            ? 'h-16 w-full max-w-3xl px-6 bg-white/80 backdrop-blur-lg border-white/20 shadow-xl shadow-black/5'
            : 'h-20 w-full max-w-7xl px-8 bg-transparent border-transparent'
        )}
      >
        <div className="flex justify-start">
          <Link href="/" aria-label="Página Inicial">
            <div className={cn("relative logo-treatment transition-all duration-500 ease-[0.22,1,0.36,1] flex items-center", isScrolled ? "h-14" : "h-16")}>
                <Image
                    src="/logo.png"
                    alt="PlenaClin Logo"
                    width={252}
                    height={56}
                    className={cn("w-auto object-contain transition-all duration-500 ease-[0.22,1,0.36,1]", isScrolled ? "h-12" : "h-14" )}
                />
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <Navigation isScrolled={isScrolled} />
        </div>
        <div className="flex justify-end">
          <Button asChild size="sm" className={cn('rounded-full px-5 transition-colors duration-300', 'bg-primary hover:bg-primary/90')}>
            <Link href={whatsappUrl} target="_blank">
              Agendar
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Pill Container */}
       <div
        className={cn(
          'mx-auto flex w-[95%] items-center justify-between rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] md:hidden',
           'border',
          isScrolled
            ? 'h-14 bg-white/80 backdrop-blur-lg border-white/20 shadow-xl shadow-black/5 px-4'
            : 'h-16 bg-transparent border-transparent px-4'
        )}
      >
        <Link href="/" aria-label="Página Inicial">
            <div className={cn("relative logo-treatment transition-all duration-500 ease-[0.22,1,0.36,1] flex items-center", isScrolled ? "h-12" : "h-14")}>
                <Image
                    src="/logo.png"
                    alt="PlenaClin Logo"
                    width={216}
                    height={48}
                    className={cn("w-auto object-contain transition-all duration-500 ease-[0.22,1,0.36,1]", isScrolled ? "h-10" : "h-12" )}
                />
            </div>
        </Link>
        <MobileNav isScrolled={isScrolled} />
      </div>
    </header>
  );
}

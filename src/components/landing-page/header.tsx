'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from './mobile-nav';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out py-4 px-4 md:px-8',
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b shadow-sm' : 'bg-transparent border-b-transparent'
      )}
    >
      <div className="container mx-auto flex justify-center items-center relative h-10">
        <Link
          href="/"
        >
          <Image
            src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/Imagens/Gemini_Generated_Image_2c991s2c991s2c99-removebg-preview.png"
            alt="PlenaClin Logo"
            width={180}
            height={40}
            className="h-10 w-auto logo-treatment"
          />
        </Link>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <MobileNav />
        </div>
      </div>
    </header>
  );
}

'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#a-clinica', label: 'Sobre' },
  { href: '#specialties', label: 'Especialidades' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
];

export function Navigation({ isScrolled }: { isScrolled: boolean }) {
    const linkClasses = cn(
        "font-semibold transition-colors duration-300 text-sm",
        isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white'
    );

    return (
        <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClasses}>
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

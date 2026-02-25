'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function ClosingCta() {
  const whatsappUrl = "https://wa.me/5551995536007?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
  
  return (
    <motion.section
      className="bg-primary py-20 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground mb-4 normal-case">
            Sua jornada de bem-estar começa aqui.
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Agende sua consulta e experimente o equilíbrio perfeito entre saúde, estética e performance em Ivoti/RS.
          </p>
          <Button asChild className="bg-secondary text-secondary-foreground rounded-lg px-6 py-4 text-sm md:px-8 md:py-6 md:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary/90">
            <Link href={whatsappUrl} target="_blank">
                <Phone className="mr-2 h-5 w-5 md:mr-3 md:h-6 md:w-6" />
                <span className="hidden md:inline">Entrar em contato via WhatsApp</span>
                <span className="inline md:hidden">Fale conosco</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

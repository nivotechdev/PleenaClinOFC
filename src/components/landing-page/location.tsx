'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Location() {
  return (
    <motion.section 
      id="contato" 
      className="py-20 md:py-32 bg-secondary/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="lg:flex lg:justify-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-primary normal-case">Localização privilegiada para o seu bem-estar</h2>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold">
                      Av. Pres. Lucena, 2750 - Bairro Brasília
                    </p>
                    <p className="text-muted-foreground">Ivoti, RS - CEP 93900-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold">Horário de funcionamento</p>
                    <p className="text-muted-foreground">Seg-Sex: 09:00–11:30 | 13:30–19:00</p>
                    <p className="text-muted-foreground">Sábado: 09:00–11:30</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Localizada no coração de Ivoti, com estacionamento próprio e fácil acesso, a PlenaClin é um ponto de tranquilidade em sua rotina.
                </p>
                <Button asChild className="transition-transform hover:scale-105">
                  <Link href="https://www.google.com/maps/search/?api=1&query=Av.+Pres.+Lucena,2750,Ivoti,RS" target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2" />
                    Explorar localização
                  </Link>
                </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.132151170316!2d-51.1615732!3d-29.599844400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194543b109af2f%3A0xeb0ae8deb766784b!2sAv.%20Pres.%20Lucena%2C%202750%20-%20Conc%C3%B3rdia%2C%20Ivoti%20-%20RS%2C%2093900-000!5e0!3m2!1spt-BR!2sbr!4v1769042559410!5m2!1spt-BR!2sbr" 
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

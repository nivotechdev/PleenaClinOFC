'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.3]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const whatsappUrl = "https://wa.me/5551995536007?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";


  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ y: videoY, scale: videoScale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/mulher.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div 
        style={{ opacity }}
        className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col items-center md:items-start text-center md:text-left space-y-8"
      >
        <motion.div
          className="space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight normal-case">
              Beleza, <span className="text-primary">saúde</span> e <span className="text-primary whitespace-nowrap">bem-estar</span><br className="hidden md:block" /> do jeito que você é.
            </h1>
            <p className="text-base md:text-lg text-gray-200 font-body">
              O equilíbrio perfeito entre saúde, beleza e harmonia.
            </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
            <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-xl mt-6 rounded-md px-10 border-white border text-white bg-transparent hover:bg-white/10 shadow-lg">
              <Link href={whatsappUrl} target="_blank">
                Agende Sua Consulta
              </Link>
            </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const spaceImages = [
    PlaceHolderImages.find(p => p.id === 'space-1'),
    PlaceHolderImages.find(p => p.id === 'space-2'),
    PlaceHolderImages.find(p => p.id === 'space-3'),
    PlaceHolderImages.find(p => p.id === 'space-4'),
    PlaceHolderImages.find(p => p.id === 'space-5'),
].filter(Boolean) as any[];


export default function AClinicaPage() {
    return (
        <div className="pt-[88px] bg-background">
            <motion.section
                className="py-20 md:py-32"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="text-left">
                            <motion.h1 
                                className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            >
                                Sobre a PlenaClin
                            </motion.h1>
                            <motion.p 
                                className="text-lg text-muted-foreground leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                            >
                                Referência em Ivoti/RS, a PlenaClin é um centro de saúde e bem-estar que une estética, cuidado da dor e tratamentos integrados. Com foco no atendimento humanizado e em resultados naturais, oferecemos um ambiente acolhedor projetado para cuidar de você por inteiro.
                            </motion.p>
                        </div>
                        
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                        >
                            <Carousel className="w-full rounded-lg overflow-hidden shadow-xl" opts={{ loop: true }}>
                                <CarouselContent>
                                    {spaceImages.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <div className="aspect-w-4 aspect-h-3">
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={image.description}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background text-primary" />
                                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background text-primary" />
                            </Carousel>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

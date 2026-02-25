'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/esp1.jpg",
    "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/esp2.jpg",
    "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/esp3.jpg",
    "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/esp4.jpg",
    "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/PLENACLIN%20(316).jpg"
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt={`Slide ${index + 1}`}
                        fill
                        className={`object-cover ${index === images.length - 1 ? 'object-right' : 'object-center'}`}
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </motion.div>
            </AnimatePresence>
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-sm transition-all hover:bg-black/75 hover:text-white"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-sm transition-all hover:bg-black/75 hover:text-white"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Space() {
    return (
        <div id="a-clinica" className="pt-[88px]">
            <motion.section
                className="relative min-h-[50vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="relative z-10 flex flex-col items-center px-4 space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <Image
                        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/Imagens/Gemini_Generated_Image_2c991s2c991s2c99-removebg-preview.png"
                        alt="PlenaClin Logo"
                        width={288}
                        height={64}
                        className="h-16 w-auto mb-4 logo-treatment"
                    />
                    <h1 className="font-headline text-4xl md:text-6xl max-w-3xl font-bold text-primary normal-case">
                        Sobre a PlenaClin
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground font-body">
                        Localizada em Ivoti, a PlenaClin oferece cuidado multidisciplinar integrado. Unimos ética, saúde e estética em um espaço planejado para proporcionar uma experiência de bem-estar completa e humanizada para cada paciente.
                    </p>
                </motion.div>
            </motion.section>

            <motion.section
                id="space-details"
                className="py-20 md:py-28 bg-background"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary normal-case">Cuidado completo, integrado e humanizado</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                A PlenaClin nasceu com o propósito de olhar para as pessoas como um todo, unindo saúde, bem-estar, estética e cuidado da dor em um único espaço.
                            </p>
                             <p className="text-muted-foreground leading-relaxed">
                                Com uma proposta multidisciplinar, trabalhamos com avaliação individualizada e acompanhamento contínuo, pautado pela ética, escuta ativa e técnicas baseadas em evidências, sempre priorizando segurança, conforto e resultados naturais.
                            </p>
                        </div>
                        <div className="order-first md:order-last">
                           <Carousel />
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

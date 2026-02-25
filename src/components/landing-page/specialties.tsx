'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const specialtiesData = [
    {
        title: 'Acupuntura',
        description: 'Indicada para dores, equilíbrio do organismo e bem-estar geral.',
        imageId: 'specialty-acupuntura',
        slug: 'acupuntura',
        topics: [
            'Alívio de dores crônicas e agudas',
            'Redução de estresse e ansiedade',
            'Melhora da qualidade do sono'
        ]
    },
    {
        title: 'Quiropraxia',
        description: 'Cuidado da coluna, articulações e função corporal.',
        imageId: 'specialty-quiropraxia',
        slug: 'quiropraxia',
        topics: [
            'Ajustes da coluna para alívio de dores',
            'Melhora da postura e mobilidade',
            'Prevenção de lesões musculoesqueléticas'
        ]
    },
    {
        title: 'Massoterapia',
        description: 'Terapêutica, relaxante e funcional.',
        imageId: 'specialty-massoterapia', 
        slug: 'estetica-corporal', // Repurposed page
        topics: [
            'Relaxamento muscular profundo',
            'Alívio de tensões e contraturas',
            'Melhora da circulação sanguínea'
        ]
    },
    {
        title: 'Estética integrada ao bem-estar',
        description: 'Tratamentos estéticos com foco em naturalidade, saúde da pele e autocuidado.',
        imageId: 'specialty-facial', // Reusing image
        slug: 'estetica-facial', // Repurposed page
        topics: [
            'Protocolos faciais e corporais personalizados',
            'Foco em resultados naturais e duradouros',
            'Estímulo à saúde da pele e ao autocuidado'
        ]
    },
    {
        title: 'Depilação a laser',
        description: 'Com tecnologia diodo LightSheer – redução progressiva e duradoura dos pelos, com segurança e conforto.',
        imageId: 'specialty-laser',
        slug: 'cilios', // Repurposed page
        topics: [
            'Tecnologia de diodo LightSheer para mais conforto',
            'Redução duradoura dos pelos em poucas sessões',
            'Tratamento seguro para diferentes tipos de pele'
        ]
    }
];

// Add image objects to the data
const specialties = specialtiesData.map(s => ({
    ...s,
    image: PlaceHolderImages.find(p => p.id === s.imageId)
}));

function ParallaxImage({ image }: { image: ImagePlaceholder }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div ref={ref} className="rounded-2xl overflow-hidden shadow-lg transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 bg-card aspect-[4/3]">
             <motion.div style={{ y }} className="relative h-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </motion.div>
        </div>
    )
}


export default function Specialties() {
    
    return (
        <div id="specialties" className="py-20 md:py-32 text-foreground">
             <motion.div 
                className="container mx-auto px-4 md:px-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
             >
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4 normal-case">
                        Nossas especialidades
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        A PlenaClin atua com um cuidado integrado, reunindo diferentes especialidades em um só lugar.
                    </p>
                </div>
            </motion.div>
            
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="space-y-20 md:space-y-28">
                    {specialties.map((specialty, index) => (
                        <div key={specialty.slug} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            
                            <motion.div
                                className={cn("group relative", index % 2 !== 0 && 'md:order-last')}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                            >
                                {specialty.image && (
                                   <ParallaxImage image={specialty.image} />
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <h2 className="font-headline text-4xl md:text-5xl text-primary normal-case">{specialty.title}</h2>
                                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{specialty.description}</p>
                                
                                <ul className="space-y-3 mt-6">
                                    {specialty.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{topic}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 text-center">
                                    <Button asChild variant="ghost" className="bg-transparent border border-primary text-primary rounded-full px-8 py-2.5 font-medium text-base hover:bg-primary hover:text-white hover:shadow-md transition-all duration-500 ease-in-out group no-underline">
                                        <Link href={`/especialidades/${specialty.slug.toLowerCase()}`}>
                                            Conhecer esta especialidade
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

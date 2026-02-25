'use client';
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const specialties = [
    {
        number: '01',
        title: 'Acupuntura',
        description: 'Indicada para dores, equilíbrio do organismo e bem-estar geral.',
        slug: 'acupuntura',
        topics: [
            'Alívio de dores crônicas e agudas',
            'Redução de estresse e ansiedade',
            'Melhora da qualidade do sono'
        ]
    },
    {
        number: '02',
        title: 'Quiropraxia',
        description: 'Cuidado da coluna, articulações e função corporal.',
        slug: 'quiropraxia',
        topics: [
            'Ajustes da coluna para alívio de dores',
            'Melhora da postura e mobilidade',
            'Prevenção de lesões musculoesqueléticas'
        ]
    },
    {
        number: '03',
        title: 'Massoterapia',
        description: 'Terapêutica, relaxante e funcional.',
        slug: 'estetica-corporal', // Repurposed page
        topics: [
            'Relaxamento muscular profundo',
            'Alívio de tensões e contraturas',
            'Melhora da circulação sanguínea'
        ]
    },
    {
        number: '04',
        title: 'Estética integrada ao bem-estar',
        description: 'Tratamentos estéticos com foco em naturalidade, saúde da pele e autocuidado.',
        slug: 'estetica-facial', // Repurposed page
        topics: [
            'Protocolos faciais e corporais personalizados',
            'Foco em resultados naturais e duradouros',
            'Estímulo à saúde da pele e ao autocuidado'
        ]
    },
    {
        number: '05',
        title: 'Depilação a laser',
        description: 'Com tecnologia diodo LightSheer – redução progressiva e duradoura dos pelos, com segurança e conforto.',
        slug: 'cilios', // Repurposed page
        topics: [
            'Tecnologia de diodo LightSheer para mais conforto',
            'Redução duradoura dos pelos em poucas sessões',
            'Tratamento seguro para diferentes tipos de pele'
        ]
    },
];

export default function EspecialidadesPage() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white text-foreground">
             <motion.div 
                className="container mx-auto px-4 md:px-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
             >
                <nav aria-label="Breadcrumb" className="mb-12 text-sm text-muted-foreground">
                    <ol className="flex items-center space-x-2">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><ChevronRight className="h-4 w-4" /></li>
                        <li className="font-medium text-primary">Especialidades</li>
                    </ol>
                </nav>
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4">
                        Nossas Especialidades
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Um refúgio de bem-estar integral, onde cada tratamento é uma experiência única de cuidado, ciência e sofisticação.
                    </p>
                </div>
            </motion.div>
            
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {specialties.map((specialty, index) => (
                    <motion.div
                        key={specialty.number}
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid md:grid-cols-4 gap-8 py-10">
                            <div className="md:col-span-1">
                                <span className="font-headline text-lg text-accent">{specialty.number}</span>
                            </div>
                            <div className="md:col-span-3 space-y-6">
                                <h2 className="font-headline text-4xl md:text-5xl text-primary">{specialty.title}</h2>
                                <p className="text-lg text-muted-foreground">{specialty.description}</p>
                                
                                <ul className="space-y-3 pt-2">
                                    {specialty.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{topic}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Button asChild variant="link" className="text-accent p-0 h-auto text-base">
                                        <Link href={`/especialidades/${specialty.slug}`}>
                                            Saber mais
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {index < specialties.length - 1 && (
                            <Separator className="my-8 md:my-12 bg-accent/20" />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

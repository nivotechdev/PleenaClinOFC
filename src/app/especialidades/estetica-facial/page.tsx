'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const topics = [
    'Protocolos faciais e corporais personalizados',
    'Foco em resultados naturais e duradouros',
    'Estímulo à saúde da pele e ao autocuidado'
];

export default function EsteticaIntegradaPage() {
    return (
        <div className="pt-[88px] min-h-screen">
            <motion.section
                className="relative min-h-[50vh] w-full flex items-center justify-center text-center bg-secondary/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container px-4 z-10">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Estética Integrada ao Bem-Estar</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Tratamentos estéticos com foco em naturalidade, saúde da pele e autocuidado.
                    </p>
                </div>
            </motion.section>
            <section className="py-20 md:py-28">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">Beleza que vem de Dentro</h2>
                        <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-4">
                            <p>Nossa abordagem em estética vai além da aparência. Acreditamos que a verdadeira beleza é um reflexo da saúde e do bem-estar. Por isso, nossos tratamentos são focados na naturalidade, na saúde da pele e no estímulo ao autocuidado.</p>
                            <p>Com uma avaliação individualizada, criamos protocolos personalizados que utilizam tecnologias avançadas e ativos de alta performance para revitalizar, rejuvenescer e cuidar da sua pele de forma integral e segura.</p>
                        </div>

                        <ul className="space-y-4 mt-8">
                            {topics.map((topic, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <Check className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{topic}</span>
                                </li>
                            ))}
                        </ul>

                        <Button asChild size="lg" className="mt-10">
                            <Link href="https://wa.me/555195536007" target="_blank">
                                Agende sua Avaliação
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

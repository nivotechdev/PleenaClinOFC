'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const topics = [
    'Relaxamento muscular profundo',
    'Alívio de tensões e contraturas',
    'Melhora da circulação sanguínea'
];

export default function ServicePage() {
    const router = useRouter();

    return (
        <div className="pt-[88px] min-h-screen">
            <div className="container px-4">
                <Button variant="link" onClick={() => router.back()} className="mt-8 ml-8 text-primary">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Voltar para o início
                </Button>
            </div>
            <motion.section
                className="relative min-h-[50vh] w-full flex items-center justify-center text-center bg-secondary/10"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            >
                <div className="container px-4 z-10">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Massoterapia</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Técnicas terapêuticas, relaxantes e funcionais para o seu bem-estar.
                    </p>
                </div>
            </motion.section>
            <section className="py-20 md:py-28">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">O poder do toque</h2>
                        <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-4">
                            <p>A massoterapia na PlenaClin abrange um conjunto de técnicas manuais que visam promover o alívio de dores, a redução do estresse e a melhoria da circulação sanguínea. Nossos profissionais são especializados em massagens terapêuticas, relaxantes e funcionais.</p>
                            <p>Cada sessão é personalizada para atender às suas necessidades específicas, seja para relaxamento profundo, alívio de tensões musculares ou como complemento a outros tratamentos de saúde.</p>
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
                                Agende sua massagem
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

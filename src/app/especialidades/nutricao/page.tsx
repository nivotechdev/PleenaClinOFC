'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Nutrição funcional & esportiva</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Potencialize seus resultados e sua saúde através de uma alimentação inteligente e personalizada.
                    </p>
                </div>
            </motion.section>
            <section className="py-20 md:py-28">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">Seu corpo, seu combustível</h2>
                        <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-4">
                            <p>A nutrição é o pilar para uma vida plena e de alta performance. Na PlenaClin, abordamos a alimentação de forma integrativa, olhando para o indivíduo como um todo. Seja para otimizar o desempenho esportivo ou para melhorar sua saúde e bem-estar geral, criamos planos alimentares que respeitam sua rotina, suas preferências e seus objetivos.</p>
                            <p>Com foco na nutrição funcional, buscamos identificar e corrigir desequilíbrios no organismo, utilizando o poder dos alimentos para modular a inflamação, otimizar a digestão e maximizar sua energia e vitalidade.</p>
                        </div>
                         <Button asChild size="lg" className="mt-10">
                            <Link href="https://wa.me/555432234237?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20nutrição." target="_blank">
                                Transforme sua alimentação
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

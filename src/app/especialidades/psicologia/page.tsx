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
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Psicologia</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Um espaço seguro para o seu autocuidado, autoconhecimento e equilíbrio emocional.
                    </p>
                </div>
            </motion.section>
            <section className="py-20 md:py-28">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">Cuidando da mente e da alma</h2>
                        <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-4">
                            <p>A saúde mental é a base para uma vida plena. Na PlenaClin, oferecemos um serviço de psicologia pautado na escuta ativa, na empatia e no sigilo profissional. É um convite para você explorar suas emoções, compreender seus padrões de comportamento e desenvolver ferramentas para lidar com os desafios da vida.</p>
                            <p>Nosso ambiente acolhedor e discreto em Caxias do Sul é o local ideal para você iniciar ou continuar sua jornada de autoconhecimento, buscando uma vida com mais clareza, propósito e paz interior.</p>
                        </div>
                         <Button asChild size="lg" className="mt-10">
                            <Link href="https://wa.me/555432234237?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20psicol%C3%B3gico." target="_blank">
                                Agende sua conversa
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

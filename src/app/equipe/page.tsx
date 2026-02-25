'use client';

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type TeamMember = {
    name: string;
    role: string;
    image: ImagePlaceholder | undefined;
};

const teamMembers: TeamMember[] = [
    {
        name: 'Dra. Elisa Knorst',
        role: 'FARMACÊUTICA ESTETA',
        image: PlaceHolderImages.find(p => p.id === 'team-elisa-knorst'),
    },
    {
        name: 'Bruna Oliveira',
        role: 'EXTENSIONISTA DE CÍLIOS',
        image: PlaceHolderImages.find(p => p.id === 'team-bruna-oliveira'),
    },
    {
        name: 'Carlos Schmidt',
        role: 'NUTRICIONISTA ESPORTIVA E FUNCIONAL',
        image: PlaceHolderImages.find(p => p.id === 'team-carlos-schmidt'),
    },
    {
        name: 'Fernanda Lima',
        role: 'MASSOTERAPEUTA',
        image: PlaceHolderImages.find(p => p.id === 'team-fernanda-lima'),
    },
    {
        name: 'Dr. Ricardo Borges',
        role: 'QUIROPRAXISTA',
        image: PlaceHolderImages.find(p => p.id === 'team-ricardo-borges'),
    },
    {
        name: 'Ana Costa',
        role: 'ACUPUNTURISTA',
        image: PlaceHolderImages.find(p => p.id === 'team-ana-costa'),
    },
];

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


export default function EquipePage() {
    return (
        <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-background">
            <section
                className="container mx-auto px-4 md:px-6"
            >
                <motion.div 
                    className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4">
                        Mentes por Trás do Cuidado
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Nossa equipe é formada por especialistas que compartilham a mesma filosofia: cuidado integral, precisão técnica e uma profunda empatia humana.
                    </p>
                </motion.div>
                
                <div className="max-w-md mx-auto flex flex-col items-center space-y-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="w-full bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={cardVariants}
                        >
                            <div className="relative z-10 w-full aspect-[4/5] overflow-hidden">
                                {member.image && (
                                    <Image
                                        src={member.image.imageUrl}
                                        alt={`Retrato de ${member.name}`}
                                        data-ai-hint={member.image.imageHint}
                                        fill
                                        sizes="(max-width: 500px) 100vw, 448px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="font-headline text-3xl font-bold text-primary">{member.name}</h3>
                                <p className="font-body text-sm font-bold uppercase tracking-widest text-accent mt-1 mb-6">{member.role}</p>
                                <Button asChild size="lg">
                                    <Link 
                                        href={`https://wa.me/555432234237?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20${encodeURIComponent(member.name)}.`}
                                        target="_blank"
                                    >
                                        Agendar Consulta
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </section>
        </div>
    );
}

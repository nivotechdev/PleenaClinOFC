'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type TeamMember = {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
    {
        name: 'Débora Francielle Grando',
        role: 'Cirugiã Dentista - Harmonização Orofacial',
        quote: 'Cuidar é entender a necessidade do outro com empatia e ciência.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/Debora-cirugia.dentista.jpg'
    },
    {
        name: 'Jonas Felipe Schmidt',
        role: 'Acupunturista',
        quote: 'O equilíbrio do corpo começa na energia que flui.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/JONAS%20FELIPE%20SCHMIDT.jpg'
    },
    {
        name: 'Leila Riehl Schmidt',
        role: 'Quiropraxista',
        quote: 'Alinhar a coluna é realinhar a vida.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/LEILA%20RIEHL%20SCHMIDT%20(2).jpg'
    },
    {
        name: 'Sirlei Antonio de Moraes',
        role: 'Massoterapeuta',
        quote: 'O toque que cura, o cuidado que conforta.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/SIRLEI%20ANTONIO%20DE%20MORAES.jpg'
    },
    {
        name: 'Gabriela Brandão Collar',
        role: 'Farmacêutica especialista em estética facial',
        quote: 'A ciência a serviço da pele, a beleza a favor da autoestima.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/gabriela.jpg'
    },
    {
        name: 'Gabrieli Casagrande da Cruz',
        role: 'Esteticista especialista em tecnologias',
        quote: 'Tecnologia e sensibilidade para revelar a sua melhor versão.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/GABRIELI%20CASAGRANDE%20DA%20CRUZ.jpg'
    },
    {
        name: 'Leonara Reichert',
        role: 'Recepcionista',
        quote: 'O primeiro sorriso que acolhe e organiza o seu bem-estar.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/PLENACLIN%20(128).jpg'
    },
    {
        name: 'KELLY REGINA BATISTA',
        role: 'Podóloga',
        quote: 'Saúde para seus pés.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/KELLY%20REGINA%20BATISTA%20Podologa.jpeg'
    },
    {
        name: 'VANESSA FEILSTRECKER',
        role: 'Nutricionista',
        quote: 'Nutrindo o seu bem-estar e qualidade de vida.',
        imageUrl: 'https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/Vanessa%20Nutricionista.jpeg'
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function TeamMemberCard({ member, isLast }: { member: TeamMember, isLast: boolean }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const cardWidth = 'w-[calc(50%-12px)] sm:w-[280px]';
  const scaleClass = isLast && teamMembers.length % 2 !== 0 ? 'scale-90 sm:scale-100 sm:last:translate-x-1/2' : '';


  return (
    <motion.div
      className={`group relative overflow-hidden text-center ${cardWidth} ${scaleClass}`}
      variants={itemVariants}
    >
      <div className="relative overflow-hidden rounded-lg shadow-sm aspect-[3/4] bg-card">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={`Retrato de ${member.name}`}
            fill
            sizes="(max-width: 640px) 45vw, 280px"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg className="w-1/2 h-1/2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.993A5.993 5.993 0 015.993 15h12.014c3.309 0 5.993 2.684 5.993 5.993zM12 12c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="relative text-primary-foreground text-center text-base italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-headline text-xl font-medium text-primary normal-case">{member.name}</h3>
        <p className="font-serif italic text-xs text-gray-400">
          {member.role.charAt(0).toUpperCase() + member.role.slice(1).toLowerCase()}
        </p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div id="equipe" className="py-24 md:py-32">
      <motion.section
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.h1
            className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4 normal-case"
            variants={itemVariants}
          >
            Mentes por trás do cuidado
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            variants={itemVariants}
          >
            Nossa equipe é formada por especialistas que compartilham a mesma filosofia: cuidado multidisciplinar, com uma abordagem holística, precisão técnica e uma profunda empatia humana.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} isLast={index === teamMembers.length - 1} />
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}

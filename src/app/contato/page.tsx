'use client';
import Location from "@/components/landing-page/location";
import { motion } from "framer-motion";

export default function ContatoPage() {
    return (
        <div className="pt-[88px]">
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
                    <h1 className="font-headline text-4xl md:text-6xl max-w-3xl font-bold text-primary">
                        Entre em Contato
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground font-body">
                        Estamos ansiosos para receber você em nosso espaço.
                    </p>
                </motion.div>
            </motion.section>
            <Location />
        </div>
    );
}
'use client';
import { motion } from 'framer-motion';

export default function BlogPage() {
    return (
        <div className="pt-[88px] min-h-[70vh] flex items-center justify-center">
            <motion.section
                className="relative w-full flex items-center justify-center text-center"
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
                        Blog
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground font-body">
                        Em breve, um espaço com dicas e novidades sobre saúde, beleza e bem-estar.
                    </p>
                </motion.div>
            </motion.section>
        </div>
    );
}
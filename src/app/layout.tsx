import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingCTA from '@/components/landing-page/floating-cta';
import GoogleTagManager from '@/components/layout/google-tag-manager';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'PlenaClin: A harmonia entre ciência e essência.',
  description: 'PlenaClin: O refúgio em Caxias do Sul para quem busca a harmonia entre ciência, cuidado e bem-estar.',
  icons: {
    icon: {
      url: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/logos/Design%20sem%20nome%20(6).svg",
      type: "image/svg+xml",
    },
    shortcut: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/logos/Design%20sem%20nome%20(6).svg",
    apple: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/logos/Design%20sem%20nome%20(6).svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <Suspense fallback={null}>
          <GoogleTagManager />
        </Suspense>
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <FloatingCTA />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

'use client';
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      {...props}
    >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.428-9.888 9.89 .001 2.235.654 4.288 1.902 6.046l-1.157 4.244 4.352-1.14zM16.75 13.96c.25.13.41.2.52.32.11.12.15.33.05.54-.1.21-.46.55-.67.75-.21.2-.42.24-.79.14-.37-.1-.9-.33-1.66-.91-.76-.58-1.28-1.28-1.42-1.54-.14-.26-.03-.4.1-.54.11-.12.24-.16.36-.26.12-.1.19-.18.29-.3.1-.12.09-.24 0-.36-.09-.12-.42-.99-.58-1.36-.16-.37-.33-.31-.45-.31h-.29c-.12 0-.3.04-.45.24-.15.2-.58.55-.58 1.36S12 13.9 12.15 14.15c.15.25.86 1.34 2.11 1.87.28.12.52.19.73.25.4.12.65.1.86-.05.25-.19.41-.81.47-1.05.06-.24.03-.45-.03-.58-.06-.13-.24-.21-.42-.32z"/>
    </svg>
);

export default function Footer() {
    const whatsappUrl = "https://wa.me/5551995536007?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
    return (
      <footer className="bg-background py-12 border-t">
        <div className="container mx-auto px-4 md:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          
          <div className="flex flex-col items-center sm:items-start space-y-4">
             <Link href="/">
                <Image
                    src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/Imagens/Gemini_Generated_Image_2c991s2c991s2c99-removebg-preview.png"
                    alt="PlenaClin Logo"
                    width={288}
                    height={64}
                    className="h-16 w-auto logo-treatment"
                />
            </Link>
            <div>
                <p className="text-muted-foreground text-sm">Av. Pres. Lucena, 2750 - Brasília</p>
                <p className="text-muted-foreground text-sm">Ivoti, RS - 93900-000</p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-headline text-xl text-primary mb-4">Navegue</h3>
            <ul className="space-y-2 text-sm">
                <li><Link href="#a-clinica" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
                <li><Link href="#specialties" className="text-muted-foreground hover:text-primary transition-colors">Especialidades</Link></li>
                <li><Link href="#equipe" className="text-muted-foreground hover:text-primary transition-colors">Equipe</Link></li>
                <li><Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
             <h3 className="font-headline text-xl text-primary mb-4">Conecte-se</h3>
             <div className="flex items-center gap-6">
                <Link href="https://www.instagram.com/plenaclin/" target="_blank" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" strokeWidth={1.5}/>
                </Link>
                <Link href="https://www.facebook.com/plenaclin" target="_blank" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" strokeWidth={1.5}/>
                </Link>
                <Link href={whatsappUrl} target="_blank" aria-label="WhatsApp">
                    <WhatsAppIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
             </div>
          </div>

        </div>
        <div className="container mx-auto px-4 md:px-6 text-center mt-8 pt-8 border-t">
            <p className="text-muted-foreground text-xs">&copy; {new Date().getFullYear()} PlenaClin. Todos os direitos reservados. Desenvolvido com excelência.</p>
        </div>
      </footer>
    );
  }

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

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
                width={150}
                height={33}
                className="h-8 w-auto logo-treatment"
              />
            </Link>
            <div>
                <p className="text-muted-foreground text-sm">Rua Exemplo, 123 - Bairro Nobre</p>
                <p className="text-muted-foreground text-sm">Caxias do Sul, RS - 95000-000</p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-headline text-xl text-primary mb-4 normal-case">Navegue</h3>
            <ul className="space-y-2 text-sm">
                <li><Link href="#specialties" className="text-muted-foreground hover:text-primary transition-colors">Serviços</Link></li>
                <li><Link href="#team" className="text-muted-foreground hover:text-primary transition-colors">Equipe</Link></li>
                <li><Link href="#location" className="text-muted-foreground hover:text-primary transition-colors">Localização</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
             <h3 className="font-headline text-xl text-primary mb-4 normal-case">Conecte-se</h3>
             <div className="flex items-center gap-4">
                <Link href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" strokeWidth={1.5}/>
                </Link>
                <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" strokeWidth={1.5}/>
                </Link>
                <Link href={whatsappUrl} aria-label="WhatsApp" target="_blank">
                    <MessageCircle className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" strokeWidth={1.5}/>
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

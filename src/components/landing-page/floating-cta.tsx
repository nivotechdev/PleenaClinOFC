'use client';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from 'next/image';

export default function FloatingCTA() {
  const whatsappUrl = "https://wa.me/5551995536007?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg bg-transparent text-white z-50 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-transparent/90 opacity-90 hover:opacity-100"
          >
            <Link href={whatsappUrl} target="_blank" aria-label="Agende sua avaliação pelo WhatsApp">
              <Image src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/imgPlenaclin/whatsapp%20(1).png" alt="WhatsApp Icon" width={64} height={64} />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-popover text-popover-foreground">
          <p>Agende sua avaliação</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

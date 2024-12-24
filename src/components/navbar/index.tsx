import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Ticket, User, DollarSign } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <header className="flex items-center justify-center relative py-4">
      <h3>eventify</h3>
      <div className="absolute right-4">
        <Sheet>
          <SheetTrigger>
            <Menu size={30} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Eventify</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-start gap-2 mt-10">
              <Link href="/" passHref>
                <div className="flex items-center gap-2">
                  <Home size={24} />
                  Início
                </div>
              </Link>

              <Link href="/criar-evento" passHref>
                <div className="flex items-center gap-2">
                  <Ticket size={24} />
                  Criar Evento
                </div>
              </Link>

              <Link href="/meus-eventos" passHref>
                <div className="flex items-center gap-2">
                  <User size={24} />
                  Meus Eventos
                </div>
              </Link>

              <Link href="/planos" passHref>
                <div className="flex items-center gap-2">
                  <DollarSign size={24} />
                  Planos
                </div>
              </Link>
            </div>
            <div className="absolute bottom-4 flex justify-center items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>nome do usuario</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

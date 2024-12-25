"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Ticket, User, DollarSign } from "lucide-react";
import Link from "next/link";

import { ButtonLogout } from "../buttonLogout";

export function Navbar() {
  const pathname = usePathname();

  const isEventPage =
    pathname.startsWith("/event/") && pathname.split("/").length === 3;

  if (isEventPage) {
    return null;
  }

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

              <Link href="event" passHref>
                <div className="flex items-center gap-2">
                  <Ticket size={24} />
                  Eventos
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
            <ButtonLogout />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

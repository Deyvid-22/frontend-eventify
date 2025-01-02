"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Ticket, User, DollarSign, PanelBottom } from "lucide-react";
import Link from "next/link";

import { ButtonLogout } from "../buttonLogout";

export function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isLoginPage = pathname === "/login";
  if (isHomePage || isLoginPage) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      <aside className="hidden sm:flex flex-col items-center fixed inset-y-0 top-0 left-0 z-10 w-14 h-screen border-r pt-8 gap-5 bg-muted/30 ">
        <Link href="/" passHref title="Inicio">
          <div className="flex items-center gap-2">
            <Home size={28} />
          </div>
        </Link>
        <Link href="teste" passHref title="Meus Eventos">
          <div className="flex items-center gap-2">
            <Ticket size={28} />
          </div>
        </Link>
        <Link href="/meus-eventos" passHref>
          <div className="flex items-center gap-2">
            <User size={28} />
          </div>
        </Link>
        <Link href="/payment" passHref title="">
          <div className="flex items-center gap-2">
            <DollarSign size={28} />
          </div>
        </Link>
      </aside>

      <header className="sm:hidden ">
        <div className="py-4 px-3 border-b w-full">
          <Sheet>
            <SheetTrigger className="flex items-center gap-1">
              <PanelBottom size={30} /> Menu
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

                <Link href="/payment" passHref>
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
    </div>
  );
}

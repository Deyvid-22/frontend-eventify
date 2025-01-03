"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Cookies from "js-cookie";

import { User } from "lucide-react";

export function ButtonLogout() {
  const { data: session } = useSession();

  function handleLogout() {
    Cookies.remove("userData");

    signOut({ callbackUrl: "/login" });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="flex justify-center items-center gap-2 absolute bottom-4 cursor-pointer sm:flex-row-reverse"
          title={session?.user ? "Sair" : "Entrar"}
        >
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <p className="text-lg">{session?.user?.name || "Entrar"}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        {session?.user ? (
          <DropdownMenuItem onClick={() => handleLogout()}>
            Sair
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Entrar
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

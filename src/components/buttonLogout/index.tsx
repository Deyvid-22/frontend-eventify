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

import { User } from "lucide-react";

export function ButtonLogout() {
  const { data: session } = useSession();

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
          <p>{session?.user?.name}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        {session?.user ? (
          <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
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

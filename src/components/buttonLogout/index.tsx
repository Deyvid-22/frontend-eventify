"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect } from "react";

export function ButtonLogout() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) router.push("/");

    console.log(session?.user);
  }, [session?.user, router]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center gap-2 absolute bottom-4">
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>nome do usuario</p>
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

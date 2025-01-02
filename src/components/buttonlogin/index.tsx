"use client";

import { signIn } from "next-auth/react";
import { IconGoogle } from "../icons/IconGoogle";

export function ButtonLogin() {
  return (
    <div>
      <button
        className="flex justify-center items-center gap-2 bg-slate-300 text-slate-800 font-bold px-6 py-3 rounded-md"
        onClick={() => signIn("google")}
      >
        <IconGoogle /> Fazer Login com Google
      </button>
    </div>
  );
}

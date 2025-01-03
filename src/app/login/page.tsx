"use client";

import Image from "next/image";
import Link from "next/link";

import { api } from "@/lib/axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import Cookies from "js-cookie";
import { IconGoogle } from "@/components/icons/IconGoogle";

export default function Login() {
  const { data: session } = useSession();
  const token = Cookies.get("userData");
  const router = useRouter();

  const login = useCallback(() => {
    signIn("google");
  }, []);

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }

    if (!session?.user) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await api.post("/user/check", {
          email: session?.user?.email,
        });

        const data = response.data.token;
        Cookies.set("userData", JSON.stringify(data), { expires: 7 });
        console.log("Dados salvos nos cookies:", data);
        router.push("/dashboard");
      } catch (error) {
        signOut({
          callbackUrl: "/payment",
        });
        console.log("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [session?.user, router, token, login]);

  return (
    <div className="grid grid-cols-2 justify-center items-center w-full relative h-screen object-cover">
      <div className="m-auto w-full flex flex-col justify-center items-center ">
        <div className="m-auto text-center">
          <h1 className="text-balance text-6xl  font-semibold">
            Crie eventos incríveis com facilidade!
          </h1>
          <p className="mt-4 text-pretty text-lg font-medium sm:text-xl/8">
            Cadastre-se e escolha seu plano para começar a organizar eventos
            personalizados, com total controle e flexibilidade.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-x-6 gap-y-3">
            <button
              className="flex justify-center items-center gap-2 bg-slate-300 text-slate-800 font-bold px-6 py-3 rounded-md"
              onClick={() => login()}
            >
              <IconGoogle /> Fazer Login com Google
            </button>

            <Link href="/payment" className="underline">
              Conheça nossos Planos
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full relative">
        <Image
          src="/banner2.png"
          alt="banner2"
          fill={true}
          priority={true}
          quality={100}
          className="object-cover -z-10  bg-black opacity-5"
          rel="preload"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

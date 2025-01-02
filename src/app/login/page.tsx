"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonLogin } from "@/components/buttonlogin";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Login() {
  const { data: session } = useSession();
  const token = Cookies.get("userData");
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      return;
    }

    if (token) {
      router.push("/dashboard");
    }

    const fetchData = async () => {
      try {
        const response = await api.post("/user/check", {
          email: session?.user?.email,
        });

        if (response.data.error === "user not exists" || !response.data.token) {
          console.log("not authorization");
          return;
        }

        const data = response.data.token;
        Cookies.set("userData", JSON.stringify(data), { expires: 7 });
        console.log("Dados salvos nos cookies:", data);
        router.push("/dashboard");
      } catch (error) {
        router.push("/login");
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [session?.user, router, token]);

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
            <ButtonLogin />

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

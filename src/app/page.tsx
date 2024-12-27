import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-2 justify-center items-center w-full relative   h-screen object-cover">
      <div className=""></div>
      <div className="h-full relative">
        <Image
          src="/banner2.png"
          alt="banner2"
          fill={true}
          priority={true}
          quality={100}
          className="object-cover -z-10  bg-black opacity-5"
          rel="preload"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-balance text-5xl font-semibold">
          Crie eventos incríveis com facilidade!
        </h1>
        <p className="mt-4 text-pretty text-lg font-mediumsm:text-xl/8">
          Cadastre-se e escolha seu plano para começar a organizar eventos
          personalizados, com total controle e flexibilidade.
        </p>
        <div className="mt-5 flex items-center justify-center gap-x-6">
          <Link
            href="/login"
            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white "
          >
            Começar
          </Link>
          <a href="#" className="text-sm/6 font-semibold text-gray-400">
            Saber mais <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

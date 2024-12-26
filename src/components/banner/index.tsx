import Image from "next/image";

export function Banner() {
  return (
    <>
      <div className="relative w-full h-[300px]">
        <Image
          src="/banner2.png"
          alt="banner"
          fill={true}
          priority={true}
          quality={100}
          className="object-cover"
          rel="preload"
        />

        <div className="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 bg-opacity-70 bg-black rounded-md">
          <h2 className=" font-semibold mb-2">
            Crie eventos incríveis com facilidade!
          </h2>
          <p className="">
            Cadastre-se e escolha seu plano para começar a organizar eventos
            personalizados, com total controle e flexibilidade.
          </p>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { ExternalLink, FactoryIcon, Heart, MoveLeft } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { Modal } from "@/components/modal";
import { IconGoogle } from "@/components/icons/IconGoogle";
import { Loading } from "@/components/loading";

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
}

export default function CardDetail() {
  const { id } = useParams();

  const { data: session } = useSession();

  const router = useRouter();

  const [eventData, setEventData] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      const response = await api.get(`/event/${id}`);
      setEventData(response.data);
      console.log("Status da resposta:", response.status);
      console.log("Resposta do servidor:", response.data);
    };

    fetchEventData();
  }, [id]);

  if (!eventData) {
    return (
      <>
        <Loading />
      </>
    );
  }

  function VerifyLogout() {
    //aqui sera acondição para busca os favoritos caso o user estaja logado
    // if (!session?.user) {
    //   alert("Faça login para curtir o evento");
    // }
  }

  return (
    <>
      <section className="flex flex-col items-center relative w-full h-[250px]">
        <div className="absolute w-full z-10 top-1 flex justify-between items-center p-4 ">
          <MoveLeft
            size={30}
            className="cursor-pointer"
            onClick={() => router.back()}
          />
          <div className="flex justify-center items-center gap-2 relative">
            <ExternalLink size={30} />
            <FactoryIcon size={28} />
          </div>
        </div>

        <div className="flex flex-col items-center relative w-full h-[300px]">
          <Image
            src={eventData.imageUrl}
            alt={eventData.title}
            fill={true}
            quality={100}
            priority={true}
            className="object-cover"
          />
        </div>
      </section>

      <section className="space-y-3 px-2 py-3">
        <div className="w-full flex justify-between items-center">
          <div className="flex  justify-center items-end gap-1">
            <div>
              <p className="font-light text-[15px] text-green-400 space-x-1">
                R$ <span className="text-[18px]">38,99 </span>
                <span className=" line-through text-slate-600">R$ 50,65</span>
              </p>
              <p>
                <span className="text-gray-400 text-[16px]">
                  Em ate 2x 6,15
                </span>
              </p>
            </div>
            <p className="text-[13px]"></p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p className="font-semibold text-[18px]">252 vendido(s)</p>
            {session?.user ? (
              <Heart size={28} onClick={() => VerifyLogout()} />
            ) : (
              <Modal icon={<Heart size={28} />}>
                <Button onClick={() => signIn("google")}>
                  <IconGoogle /> Fazer login
                </Button>
              </Modal>
            )}
          </div>
        </div>
        <p>
          {eventData.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit laboriosam, molestias, natus totam
          corrupti dolorem minus iste omnis itaque temporibus accusantium
          praesentium deserunt id, cum eum! Atque ex cupiditate quod.
        </p>
      </section>
    </>
  );
}

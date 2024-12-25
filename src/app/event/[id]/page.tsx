"use client";

import Image from "next/image";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { ExternalLink, FactoryIcon, Heart, MoveLeft } from "lucide-react";

import { Loading } from "@/components/loading";

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
}

export default function Event() {
  const { id } = useParams();
  const [eventData, setEventData] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await api.get(`/event/${id}`);
        setEventData(response.data);
        console.log("Status da resposta:", response.status);
        console.log("Resposta do servidor:", response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do evento", error);
      }
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

  return (
    <>
      <section className="flex flex-col items-center relative w-full h-[250px]">
        <div className="absolute w-full z-10 top-1 flex justify-between items-center p-4 ">
          <MoveLeft size={30} className="cursor-pointer  " />
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

      <section className="w-full flex justify-between items-center px-4 py-2">
        <div>
          <p>38,99</p>
          <p>
            Em ate <span>2X R$ 6,15</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p>252 vendido(s)</p>
          <Heart size={30} />
        </div>
      </section>
    </>
  );
}

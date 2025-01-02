"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

interface CardProps {
  data: Event;
}

export function CardEvent({ data }: CardProps) {
  const { id, title, description, imageUrl, date } = data;

  const formattedDate = format(
    new Date(date),
    "dd 'de' MMMM 'de' yyyy 'às' HH:mm:ss",
    { locale: ptBR }
  );

  return (
    <div key={id}>
      <div className="w-full h-[200px] relative">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill={true}
            priority={true}
            quality={100}
            className="object-cover"
          />
        )}
      </div>
      <div className="pl-2 pt-1">
        <p className="text-slate-800 text-[18px]">{formattedDate}</p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

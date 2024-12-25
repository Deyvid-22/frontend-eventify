import { Card } from "@/components/card";
import { api } from "@/lib/axios";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export default async function Events() {
  let eventsData: Event[] = [];

  try {
    const response = await api.get("/events");
    eventsData = response.data;

    // console.log("Dados dos eventos:", eventsData);
  } catch (error) {
    console.error("Erro ao buscar dados dos eventos", error);
  }

  return (
    <div>
      <h1>Eventos</h1>

      <section className="flex flex-col gap-5">
        {eventsData.length > 0 ? (
          eventsData.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <Card data={event} />
            </Link>
          ))
        ) : (
          <p>Nenhum evento cadastrado</p>
        )}
      </section>
    </div>
  );
}

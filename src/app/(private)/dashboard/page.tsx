import { ButtonLogout } from "@/components/buttonLogout";
import { Chart } from "@/components/chart";
import { CardComponent } from "@/components/card";

import { Navbar } from "@/components/navbar";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SelectEvent } from "@/components/selectEvent";

import { decodeJwt } from "@/utils/decodeJwt";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("userData")?.value;

  if (!token) {
    redirect("/login");
  }

  console.log(decodeJwt(token));
  return (
    <>
      <Navbar />
      <main className="sm:pl-14">
        <section className="p-3 sm:p-5 space-y-5">
          <div className="hidden sm:flex justify-end items-center w-full py-8 pr-4 text-end font-bold text-2xl relative">
            <ButtonLogout />
          </div>
          <SelectEvent />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CardComponent
              title="Total de vendas"
              description="total de vendas em 30 dias"
              totalSales="total 400,0000"
            />
            <CardComponent
              title="Total de usuários"
              description="total de usuários cadastrados no evento"
              totalSales="total de usuários 300"
            />
            <CardComponent
              title="Ingressos"
              description="Total de ingressos restantes"
              totalSales="5"
            />
          </div>
          <Chart />
        </section>
      </main>
    </>
  );
}

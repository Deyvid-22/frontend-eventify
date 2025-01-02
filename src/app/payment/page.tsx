import { ButtonLogout } from "@/components/buttonLogout";
import { CardPayment } from "@/components/CardPayment";
import { Navbar } from "@/components/navbar";

const plans = [
  {
    title: "Padrão",
    price: "$29",
    features: [
      "Criar eventos",
      "Gerenciar Eventos",
      "Acessar relatórios detalhados",
      "Atendimento prioritário",
      "Integração com plataformas de pagamentos",
      "Armazenamento adicional de dados",
      "Página personalizada",
    ],
  },
  {
    title: "Premium",
    price: "$49",
    features: [
      "Criar eventos",
      "Gerenciar Eventos",
      "Acessar relatórios detalhados",
      "Atendimento prioritário",
      "Integração com plataformas de pagamentos",
      "Armazenamento adicional de dados",
      "Página personalizada",
      "Suporte exclusivo",
      "Análises avançadas",
    ],
  },
  {
    title: "Enterprise",
    price: "$99",
    features: [
      "Criar eventos",
      "Gerenciar Eventos",
      "Acessar relatórios detalhados",
      "Atendimento prioritário",
      "Integração com plataformas de pagamentos",
      "Armazenamento adicional de dados",
      "Página personalizada",
      "Suporte exclusivo",
      "Análises avançadas",
      "Consultoria dedicada",
      "Soluções personalizadas",
    ],
  },
];

export default function Payment() {
  return (
    <>
      <Navbar />
      <div className="p-5  space-y-5 sm:pl-14">
        <div className="hidden sm:flex justify-end items-center w-full py-8 pr-4 text-end font-bold text-2xl relative">
          <ButtonLogout />
        </div>
        <div className="mt-10 flex justify-center gap-14">
          <CardPayment plans={plans} />
        </div>
      </div>
    </>
  );
}

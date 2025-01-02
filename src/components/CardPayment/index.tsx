import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

interface Plan {
  title: string;
  price: string;
  features: string[];
}

interface CardPaymentProps {
  plans: Plan[];
}

export function CardPayment({ plans }: CardPaymentProps) {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className="flex justify-center w-[90%] max-w-[450px] text-center  py-4"
        >
          <div className="flex flex-col justify-center items-center relative">
            <div>
              <CardTitle className="font-bold text-3xl">{plan.title}</CardTitle>
              <p className="font-bold text-5xl">{plan.price}</p>
              <p className="font-bold">$ Por mês</p>
            </div>

            <CardContent className="m-auto flex flex-col justify-center items-start py-1 text-start ">
              {plan.features.map((feature, index) => (
                <p
                  key={index}
                  className="m-auto flex items-start py-1 w-full gap-2"
                >
                  <Check color="green" />
                  {feature}
                </p>
              ))}
            </CardContent>
            <Button
              className="w-[300px] bg-green-400 text-white hover:bg-green-300 font-bold disabled:"
              disabled={false}
            >
              Obter plano
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign } from "lucide-react";

interface CardsProps {
  title: string;
  description: string;
  totalSales: string;
}

export function CardComponent({ title, description, totalSales }: CardsProps) {
  return (
    <Card>
      <div className="relative">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="mr-18">
          <p>{totalSales}</p>
        </CardContent>
        <DollarSign className="absolute top-1/4 right-3 -translate-y-1/2" />
      </div>
    </Card>
  );
}

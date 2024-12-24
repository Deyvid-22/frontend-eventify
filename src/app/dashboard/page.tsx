import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <p></p>
      <p>dashboard</p>
    </div>
  );
}

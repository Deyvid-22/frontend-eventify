import { api } from "@/lib/axios";

interface CreateUserData {
  name: string | undefined | null;
  email: string;
}

export async function CreateUserService(userData: CreateUserData) {
  try {
    const response = await api.post("http://localhost:3333/users", userData);

    return response.data;
  } catch (error) {
    console.error("Erro ao criar o usuário:", error);
    throw new Error("Falha ao criar o usuário");
  }
}

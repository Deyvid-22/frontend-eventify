import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Rota POST para definir o cookie
export async function POST(req: NextRequest) {
  try {
    // Extraindo o corpo da requisição
    const { session } = await req.json(); // Certifique-se de que o corpo da requisição está sendo enviado corretamente

    // Verifica se a sessão foi recebida
    if (!session) {
      return new NextResponse("Session is required", { status: 400 });
    }

    const cookieStore = await cookies();

    cookieStore.set("session", session, {
      secure: false,
      httpOnly: true,
      maxAge: 86400,
      path: "/",
      sameSite: "lax",
    });

    return new NextResponse(JSON.stringify({ session }), { status: 200 });
  } catch (error) {
    console.error("Erro ao processar POST:", error);
    return new NextResponse("Failed to set session", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("session")?.value;

    if (token) {
      return new NextResponse("<h1>Token encontrado: " + token + "</h1>", {
        headers: {
          "Content-Type": "text/html",
        },
      });
    } else {
      return new NextResponse("<h1>Token não encontrado</h1>", {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
  } catch (error) {
    console.error("Erro ao processar GET:", error);
    return new NextResponse("<h1>Erro ao acessar o cookie</h1>", {
      status: 500,
      headers: {
        "Content-Type": "text/html",
      },
    });
  }
}

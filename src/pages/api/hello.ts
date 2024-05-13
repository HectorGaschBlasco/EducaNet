import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      const nombre = body.title;
      console.log(nombre)
      return new Response(JSON.stringify({
        title: nombre
      }), {
        status: 200
      })
    }
    return new Response(null, { status: 400 });
  };
  
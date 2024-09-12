import type { APIRoute } from "astro";

var clicked_theory = null
var json_theory = JSON.stringify({})

export const POST: APIRoute = async ({ request }) => {
  
    if (request.headers.get("Content-Type") === "application/json") {
      clicked_theory = await request.json();
      const name = clicked_theory.title;
      json_theory = JSON.stringify({
        "title": name
      })
      return new Response(null,{ status: 200 } )
    } 
  return new Response(null, { status: 400 })
}


export const GET: APIRoute = async ({ request }) => {
  
  if (request.headers.get("Content-Type") === "application/json") {
    return new Response(json_theory,{ status: 200 })
  }
return new Response(null, { status: 400 })
}

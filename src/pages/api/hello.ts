import type { APIRoute } from "astro";

var clicked_class = null
var json_class = JSON.stringify({})

export const POST: APIRoute = async ({ request }) => {
  
    if (request.headers.get("Content-Type") === "application/json") {
      clicked_class = await request.json();
      const name = clicked_class.title;
      json_class = JSON.stringify({
        "title": name
      })
      return new Response(null,{ status: 200 } )
    } 
  return new Response(null, { status: 400 })
}


export const GET: APIRoute = async ({ request }) => {
  
  if (request.headers.get("Content-Type") === "application/json") {
    return new Response(json_class,{ status: 200 })
  }
return new Response(null, { status: 400 })
}
  
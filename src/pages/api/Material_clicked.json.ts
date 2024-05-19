import type { APIRoute } from "astro";

var clicked_material = null
var json_material = JSON.stringify({})

export const POST: APIRoute = async ({ request }) => {
  
    if (request.headers.get("Content-Type") === "application/json") {
      clicked_material = await request.json();
      const name = clicked_material.title;
      console.log()
      console.log(name)
      console.log()
      json_material = JSON.stringify({
        "title": name
      })
      return new Response(null,{ status: 200 } )
    } 
  return new Response(null, { status: 400 })
}


export const GET: APIRoute = async ({ request }) => {
  
  if (request.headers.get("Content-Type") === "application/json") {
    return new Response(json_material,{ status: 200 })
  }
return new Response(null, { status: 400 })
}

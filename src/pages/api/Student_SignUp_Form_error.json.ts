import type { APIRoute } from "astro";

var err = null
var location = JSON.stringify({})

export const POST: APIRoute = async ({ request }) => {
  
    if (request.headers.get("Content-Type") === "application/json") {
        err = await request.json()
        location = JSON.stringify({
          "location": err.location
        })
        return new Response(null, { status: 200 })
    } 
  return new Response(null, { status: 400 })
}


export const GET: APIRoute = async ({ request }) => {
  
  if (request.headers.get("Content-Type") === "application/json") {
    return new Response(location,{ status: 200 })
  }
return new Response(null, { status: 400 })
}
  
import type { APIRoute } from "astro";

var clicked_subject = null
var json_subject = JSON.stringify({})

export const POST: APIRoute = async ({ request }) => {
  
    if (request.headers.get("Content-Type") === "application/json") {
      clicked_subject = await request.json();
      const name = clicked_subject.title;
      console.log()
      console.log(name)
      console.log()
      json_subject = JSON.stringify({
        "title": name
      })
      return new Response(null,{ status: 200 } )
    } 
  return new Response(null, { status: 400 })
}


export const GET: APIRoute = async ({ request }) => {
  
  if (request.headers.get("Content-Type") === "application/json") {
    return new Response(json_subject,{ status: 200 })
  }
return new Response(null, { status: 400 })
}
  
import { json } from "@sveltejs/kit"
import { bakeries } from "$lib/bakeries"

export async function GET({request}){
  const authHeader = request.headers.get('Authorization')

  //if(authHeader !== 'MyauthHeader'){
   // return new Response(JSON.stringify({message: 'Invalid credentials'}), status: 401)
 // }

  const data = leads()

  return new Response(JSON.stringify({data,  request}), {status:200})
}

const leads =()=>{
  //return {message: 'hello world'}
  return bakeries
}

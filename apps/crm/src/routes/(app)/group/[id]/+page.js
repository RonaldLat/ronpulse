/** @type {import('./$types').PageLoad} */

  export function load({params}){
    console.log('params',params)
    return{
      id: params.id
    }
  }

/**@type {import('./$types').Actions} */

export const actions ={
  add_new_group: async({request})=>{
    const data = await request.formData()
    const new_group_name = data.get('new_group_name')
    console.log(new_group_name)
    return {success: true}

  }
}

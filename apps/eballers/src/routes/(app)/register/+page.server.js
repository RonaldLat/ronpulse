import { redirect } from '@sveltejs/kit'

export const actions = {
  default: async ({ request, locals: { pb } }) => {
    const formData = await request.formData()
    const email = formData.get('email') 
    const password = formData.get('password') 
    console.log(email, password)
    console.log(pb.collection)

    const data = {
    // "username": "tesccusername",
    "email": email,
    "emailVisibility": true,
    "password": password,
    "passwordConfirm": password,
    // "name": "est"
    };

    // const { error } = await supabase.auth.signUp({ email, password })
    const record = await  pb.collection('users').create(data)
    return {record}
    // if (record) {
    //   console.error(record)
    //   // return redirect(303, '/auth/error');
    // } else {
    //   // return redirect(303, '/');
    // }
  },
  // login: async ({ request, locals: { supabase } }) => {
  //   const formData = await request.formData()
  //   const email = formData.get('email') as string
  //   const password = formData.get('password') as string
  //
  //   const { error } = await supabase.auth.signInWithPassword({ email, password })
  //   if (error) {
  //     console.error(error)
  //     return redirect(303, '/auth/error');
  //   } else {
  //     return redirect(303, '/private/lists');
  //   }
  // }
}


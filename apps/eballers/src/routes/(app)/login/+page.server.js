import { redirect } from '@sveltejs/kit'

export const actions = {
  login: async ({ request, locals: { pb } }) => {
    const formData = await request.formData()
    const email = formData.get('email') 
    const password = formData.get('password') 
    console.log(email, password)
    console.log(pb.collection)

    // const { error } = await supabase.auth.signUp({ email, password })
    
    const authData = await pb.collection('users').authWithPassword(
      email,
      password
    );
    console.log(authData)
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
    return {authData}
    // if (record) {
    //   console.error(record)
    //   // return redirect(303, '/auth/error');
    // } else {
    //   // return redirect(303, '/');
    // }
  },
}

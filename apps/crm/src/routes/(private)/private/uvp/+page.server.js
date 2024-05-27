import { json } from "@sveltejs/kit";
// import { createreadablestream } from "@sjs/kit/node";
import { put } from "@vercel/blob";

export const actions = {
  uvp: async ({ request, locals: { supabase } }) => {
    // Process the form data and perform actions

    const form_data = await request.formData()
    const inputs = Object.fromEntries(form_data)
    // check if logo file is present
    let logo
    if (inputs.logo) {
      return
      console.log(inputs.logo)
      const { url } = await put(inputs.logo.name, request.body, { access: 'public' });
      console.log('url', url)

      const logostream = createreadablestream(logo.path);

      // upload the logo to supabase storage
      const { data: logodata, error: logoerror } = await supabase.storage
        .from('logos')
        .upload(logo.name, logostream);

      // handle logo upload error
      if (logoerror) {
        return {
          status: 500,
          body: { error: logoerror.message }
        };
      }

      // update the logo value to the uploaded file url
      logo = logodata.key;
    }

    // insert data into the 'uvp' table
    const { data, error: err } = await supabase
      .from('uvp')
      .insert(inputs);

    // handle the response
    if (err) {
      console.log('error', err)
      // return { err }
    }


    console.log('data', data)
    return { dat: 'fucking data' }
    // return { data }
  },
};

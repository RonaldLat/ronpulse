import { json, redirect } from "@sveltejs/kit";
import { createReadableStream } from "@sveltejs/kit/node";
import { put } from "@vercel/blob";

export async function POST({ request, locals: { supabase } }) {
  const form_data = await request.formData()
  const inputs = Object.fromEntries(form_data)
  // Check if logo file is present
  let logo
  if (inputs.logo) {
    return
    console.log(inputs.logo)
    const { url } = await put(inputs.logo.name, request.body, { access: 'public' });
    console.log('url', url)

    const logoStream = createReadableStream(logo.path);

    // Upload the logo to Supabase Storage
    const { data: logoData, error: logoError } = await supabase.storage
      .from('logos')
      .upload(logo.name, logoStream);

    // Handle logo upload error
    if (logoError) {
      return {
        status: 500,
        body: { error: logoError.message }
      };
    }

    // Update the logo value to the uploaded file URL
    logo = logoData.Key;
  }

  // Insert data into the 'uvp' table
  const { data, error: err } = await supabase
    .from('uvp')
    .insert(inputs);

  // Handle the response
  if (err) {
    console.log('error', err)
    error()
    // return new Response(JSON.stringify(data))
  }
  console.log('data', data)



  const companyDetails = {
    name: 'My Company',
    employees: [
      { name: 'John Doe', salary: 45000 },
      { name: 'Jane Larkin', salary: 42000 },
      { name: 'Jim Salmon', salary: 38000 }
    ],
    customers: [
      { name: 'Bills Toys Inc', income: 30000 },
      { name: 'Silly Co', income: 25000 },
      { name: 'Rox R Us', income: 20000 }
    ]
  };
  redirect(303, '/private/uvp')
}


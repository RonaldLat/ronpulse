import { error } from "@sveltejs/kit";
import { put } from "@vercel/blob";


export const actions = {
  addfile: async ({ request, locals: { supabase } }) => {
    const data = await request.formData()
    const file = data.get('file')




    try {
      //Convert the file to string
      const fileContent = Buffer.from(await file.arrayBuffer()).toString('utf-8');
      //parse the JSON data
      const jsonData = JSON.parse(fileContent)

      const { data, error } = await supabase
        .from('latcrm96')
        //.upsert(jsonData, { onConflict: 'handle' })
        .upsert(jsonData, { onConflict: 'business_id' })
        .select()
      if (data) {
        console.log('Supabase has successfully received your data')
      }
      if (error) {
        console.log('Supabase Error', error)
      }

      return {
        status: 200,
        file_success: 'File uploaded succesfully',
        supabase_success: 'Supabase updated',
        jsonData

      }
    } catch (error) {
      console.log('Error saving file', error)
      return {
        status: 400,
        error: 'Error reading JSON file'
      }
    }

  },

  upload: async ({ request }) => {
    const form = await request.formData();
    const file = form.get("file2");

    if (!file) {
      throw error(400, { message: "No file to upload." });
    }

    const { url } = await put(file.name, file, { access: "public" });
    return { uploaded: url };
  },
}

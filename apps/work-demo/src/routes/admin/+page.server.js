import PocketBase from 'pocketbase'
const pb = new PocketBase('http:127.0.0.1:8080')

export const actions = {
  addRecords: async ({request})=>{
    const form_data = await request.formData()
    const records = Object.fromEntries(form_data)

    const record = await pb.collection('uvp').create(records)
    // console.log(record)
    return{
      record
    }

  },
  delRecord: async ({request})=>{
    const form_data = await request.formData()
    const record_to_delete = Object.fromEntries(form_data).collectionId
    

    await pb.collection('uvp').delete(record_to_delete)
    console.log('record to be be deleted', record_to_delete)
    return {
      record_to_delete
    }
  }
}
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  // const records = getRecords()
  // console.log('pb',records)

  return {
    /**type {Object}*/
    post: {
      title2: `Title for ${params.id || 'business name'} goes here`,
      content2: `Content for ${params.id || 'business name'} goes here`,
    },
    records: await getRecords()
    };
}
//helper functions
const getRecords = async()=>{
  // you can also fetch all records at once via getFullList
  const records = await pb.collection('uvp').getFullList({
    sort:'-created'
  });
  // console.log(records)
  return records

}


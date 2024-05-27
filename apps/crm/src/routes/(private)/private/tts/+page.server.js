import { json } from '@sveltejs/kit';
import * as PlayHT from 'playht';

PlayHT.init({
  apiKey: '81291023f5384beab82f4ac44b87225f',
  userId: 'Z2gZpfwLfAVlMmvqi4HJjhkDZHr1',
  defaultVoiceId: 's3://peregrine-voices/oliver_narrative2_parrot_saad/manifest.json',
  defaultVoiceEngine: 'PlayHT2.0',
});

export async function load({ fetch }) {

  return {
    voices: await list_voices()
  };
}

export const actions = {
  tts: async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const { text } = data;
    console.log(text)

    const audio = await play(text)
    return audio
  }
}



const play = async (text) => {
  console.log(text)

  const sentence = text;

  const generated = await PlayHT.generate(sentence, {
    voiceId: "anthony",
    outputFormat: "mp3",
    voiceEngine: "PlayHT2.0",
    sampleRate: 44100,
    speed: 1,
  });



  const { audioUrl } = generated;
  return audioUrl
}
const list_voices = async () => {
  const voices = await PlayHT.listVoices()
  return voices
}

import { json } from '@sveltejs/kit';
import * as PlayHT from 'playht';

export async function POST({request}){

  const play =async ()=>{

  PlayHT.init({
    apiKey: '81291023f5384beab82f4ac44b87225f',
    userId: 'Z2gZpfwLfAVlMmvqi4HJjhkDZHr1',
    defaultVoiceId: 's3://peregrine-voices/oliver_narrative2_parrot_saad/manifest.json',
    defaultVoiceEngine: 'PlayHT2.0',
  });
    const sentence =
    "hello, play support speaking? Please hold on a second, uh Let me just, um, pull up your details real quick.";

  const generated = await PlayHT.generate(sentence, {
    voiceId:
    "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",
    outputFormat: "mp3",
    voiceEngine: "PlayHT2.0",
    sampleRate: 44100,
    speed: 1,
  });

  const {audioUrl} = generated;
  return audioUrl
  }

  return new Response(json(request))
}

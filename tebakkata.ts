import got from 'got'
import { TebakKata, TebakKataSchema } from '../types/index.js'

export let tebakkatajson: TebakKata[]
export default async function tebakkata (): Promise<TebakKata> {
  if (!tebakkatajson) {
    tebakkatajson = await got(
      'https://raw.githubusercontent.com/vinbotz/database/master/tebakkata.json?token=GHSAT0AAAAAACS777XLRPVB4XVR4ZK2WEAMZSY7OQA'
    ).json()
  }
  return TebakKataSchema.parse(
    tebakkatajson[Math.floor(Math.random() * tebakkatajson.length)]
  )
}



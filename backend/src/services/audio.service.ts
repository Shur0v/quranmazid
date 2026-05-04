import { getAyahAudio, getAudioEditions } from "../adapters/recitation-api.adapter.js";

export async function getAudioForAyah(surahId: number, ayahNo: number) {
  return getAyahAudio(surahId, ayahNo);
}

export async function listAudioEditions() {
  return getAudioEditions();
}

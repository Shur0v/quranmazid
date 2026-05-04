import { ALQURAN_BASE_URL, AUDIO_EDITION } from "../config/constants.js";

type EditionResponse = {
  code: number;
  status: string;
  data: Array<{ identifier: string; format: string; type: string }>;
};

export async function getAudioEditions() {
  const response = await fetch(`${ALQURAN_BASE_URL}/edition?format=audio`);
  if (!response.ok) {
    throw new Error("Failed to fetch audio editions");
  }
  const json = (await response.json()) as EditionResponse;
  return json.data;
}

export async function getAyahAudio(
  surahId: number,
  ayahNo: number,
  edition = AUDIO_EDITION,
) {
  const response = await fetch(`${ALQURAN_BASE_URL}/ayah/${surahId}:${ayahNo}/${edition}`);
  if (!response.ok) {
    throw new Error("Failed to fetch ayah audio");
  }
  const json = (await response.json()) as {
    data: { number: number; audio: string; audioSecondary: string[] };
  };

  return {
    edition,
    ayahKey: `${surahId}:${ayahNo}`,
    primaryAudio: json.data.audio,
    secondaryAudio: json.data.audioSecondary || [],
  };
}

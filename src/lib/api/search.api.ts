import type { SearchMatch } from "@/types/ayah";
import { apiGet } from "./client";

export async function searchAyahText(query: string): Promise<SearchMatch[]> {
  const q = encodeURIComponent(query);
  return apiGet<SearchMatch[]>(`/search?q=${q}`);
}

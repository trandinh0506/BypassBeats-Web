import type { Artist } from "./artist";

export type Song = {
  song_id: string;
  title: string;
  artists: Artist[];
  duration: number;
};

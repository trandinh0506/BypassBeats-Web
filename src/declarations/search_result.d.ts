export type SearchArtistResult = {
  id: string;
  name: string;
};
export type SearchSongResult = {
  id: string;
  title: string;
  artists: SearchArtistResult[];
};
export type SearchPlaylistResult = {
  id: string;
};
export type SearchResult = {
  artists: SearchArtistResult[];
  songs: SearchSongResult[];
  playlists: SearchPlaylistResult[];
  error: string;
  success: boolean;
};

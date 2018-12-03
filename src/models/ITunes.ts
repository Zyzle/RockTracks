export interface Result {
  artistId: number;
  collectionId: number;
  trackId: number
  artistName: string;
  collectionName: string;
  trackName: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl100: string;
  trackPrice: number;
  releaseDate: string;
  trackTimeMillis: number;
  currency: string;
}

export interface SearchResults {
  resultsCount: number;
  results: Result[]
}
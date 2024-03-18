export interface Result {
  media_type: MediaType;
  id: number;
  title: string;
  name: string;
}

export interface MovieResult extends Result {
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
}
  
export interface PersonResult extends Result {
  gender: number;
  known_for_department: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: Array<MovieResult | TvResult>;
}

export interface TvResult extends Result {
  backdrop_path: string;
  genre_ids: Array<number>;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface SearchMultiData {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<Result>;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenresData {
  genres: Array<Genre>;
}

export enum MediaType {
  Movie = "movie",
  TV = "tv",
  Person = "person"
}
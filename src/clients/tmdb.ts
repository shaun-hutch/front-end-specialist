import { GenresData, SearchMultiData } from "../app/models/apiModels";

const baseUrl = "https://api.themoviedb.org/3";

export const searchMulti = async (
  query: string,
  page: string = "1"
): Promise<SearchMultiData> => 
  await get<SearchMultiData>(`${baseUrl}/search/multi?query=${query}&page=${page}&include_adult=false`);

export const getMovieGenres = async (): Promise<GenresData> => 
  await get<GenresData>(`${baseUrl}/genre/movie/list`);

export const getTvGenres = async (): Promise<GenresData> => 
  await get<GenresData>(`${baseUrl}/genre/tv/list`);


const get = async <T>(url: string): Promise<T> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH}`  
    }
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch data, URL: ${url}`);
  }

  return response.json() as Promise<T>;
};
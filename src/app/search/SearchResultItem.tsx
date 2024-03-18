import {
  Typography,
} from "@mui/material";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Genre, MediaType, MovieResult, PersonResult, Result, TvResult } from "@/app/models/apiModels";
import { TvCard } from "../../components/TvCard/TvCard";
import { PersonCard } from "@/components/PersonCard/PersonCard";

export const SearchResultItem = async ({
  result,
  movieGenres,
  tvGenres
}: {
  result: Result;
  movieGenres: Array<Genre>;
  tvGenres: Array<Genre>;
}) => { 
  switch (result.media_type) {
    case MediaType.Movie: 
      return <MovieCard result={result as MovieResult} genres={movieGenres} />
    case MediaType.TV:
      return <TvCard result={result as TvResult} genres={tvGenres}/>
    case MediaType.Person:
      return <PersonCard result={result as PersonResult} />
    default:
      return <Typography>Search result is not a movie, TV show or person</Typography>;
  }
};

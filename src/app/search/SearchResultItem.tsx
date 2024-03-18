import {
  Typography,
} from "@mui/material";
import { MovieCard } from "../../components/movieCard/MovieCard";
import { MediaType, MovieResult, PersonResult, Result, TvResult } from "@/clients/apiModels";
import { TvCard } from "../../components/tvCard/TvCard";
import { PersonCard } from "@/components/personCard/PersonCard";

export const SearchResultItem = async ({
  result
}: {
  result: Result;
}) => { 
  switch (result.media_type) {
    case MediaType.Movie: 
      return <MovieCard result={result as MovieResult} />
    case MediaType.TV:
      return <TvCard result={result as TvResult} />
    case MediaType.Person:
      return <PersonCard result={result as PersonResult} />
    default:
      return <Typography>Search result is not a movie, TV show or person</Typography>;
  }
};

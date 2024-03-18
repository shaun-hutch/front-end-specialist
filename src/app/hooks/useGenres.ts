import { getMovieGenres, getTvGenres } from "@/clients/tmdb";

export const useGenres = async () => {
    const { genres: movieGenres } = await getMovieGenres();
    const { genres: tvGenres } = await getTvGenres();

    return { movieGenres, tvGenres };
};
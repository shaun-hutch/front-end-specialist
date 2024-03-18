import { searchMulti } from "@/clients/tmdb";

export const useSearchMulti = async (searchParams: { [key: string]: string | string[] | undefined }) => {
  const { results } = await searchMulti(
    searchParams.q as string,
    searchParams.page as string
  );

  return results;
};
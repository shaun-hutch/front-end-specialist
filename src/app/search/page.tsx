import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { TotalSearchResults } from "./TotalSearchResults";
import { SearchResultsPaginationServer } from "./SearchResultsPagination.server";
import { SearchResultItem } from "./SearchResultItem";
import { Stack } from "@mui/material";
import { useSearchMulti } from "../hooks/useSearchMulti";
import { useGenres } from "../hooks/useGenres";

export default async function StarredPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const results = await useSearchMulti(searchParams);
  const { movieGenres, tvGenres } = await useGenres();

  if (!results || !movieGenres || !tvGenres) {
    return null;
  }

  return (
    <Container maxWidth="md">
      <TotalSearchResults searchParams={searchParams} />
      <Stack direction="column" spacing={4} my={4}>
        {results.map((result) => (
          <SearchResultItem result={result} movieGenres={movieGenres} tvGenres={tvGenres} />
          ))}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        >
        <SearchResultsPaginationServer searchParams={searchParams} />
      </Box>
    </Container>
  );
}

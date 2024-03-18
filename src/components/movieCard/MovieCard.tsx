import * as React from "react";
import Box from "@mui/material/Box";
import { Card, CardContent, CardHeader, Chip, CircularProgress, Divider, Stack, Typography } from "@mui/material";
import { Genre, MovieResult } from "@/app/models/apiModels";

export const MovieCard = async ({
  result,
  genres
}: {
  result: MovieResult;
  genres: Array<Genre>;
}) => {

  const movieGenreNames = result.genre_ids.map((genreId: number) => {
    let { name } =
    genres.find((currentGenre) => currentGenre.id === genreId) ?? {};

    return name;
  });

  return (
  <Card variant="outlined" sx={{ borderRadius: 2 }}>
    <CardHeader
      title={<Typography variant="h5">{result.title}</Typography>}
      subheader={
        <Typography variant="body2" color="text.secondary">
          {new Date(result.release_date).toLocaleDateString()}
        </Typography>
      }
      sx={{
        flexDirection: "row-reverse",
      }}
      avatar={
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={result.vote_average * 10}
            color="primary"
            thickness={4}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption" fontWeight={600} component="div">
              {result.vote_average.toFixed(1)}
            </Typography>
          </Box>
        </Box>
      }
    />
    <CardContent>{result.overview}</CardContent>
    <CardContent>
      <Stack direction="row" justifyContent="space-between">
        <Chip label="Movie" variant="outlined" color="primary" />
        <Stack
          divider={<Divider orientation="vertical" />}
          direction="row"
          spacing={1}
          alignItems="center"
        >
          {movieGenreNames.map((genreName) => (
            <Typography
              variant="body2"
              component="div"
              color="text.secondary"
            >
              {genreName}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </CardContent>
  </Card>
  )
};
import * as React from "react";
import Box from "@mui/material/Box";
import { Card, CardContent, CardHeader, Chip, CircularProgress, Divider, Stack, Typography } from "@mui/material";
import { PersonResult, Result } from "@/app/models/apiModels";

export const PersonCard = async ({
  result,
}: {
  result: PersonResult;
}) => {

  const knownForNames = result.known_for.map((knownFor: Result) => 
    knownFor?.title ?? knownFor?.name ?? "").join(', ');

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{result.name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {result.known_for_department}
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
        avatar={
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={result.popularity}
              color="success"
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
                {result.popularity.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          >
            {knownForNames}
          </Stack>
        </Stack>
      </CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label="People" variant="outlined" color="success" />
        </Stack>
      </CardContent>
    </Card>
  )
};
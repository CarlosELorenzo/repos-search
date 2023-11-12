"use client";
import { Chip, Stack } from "@mui/material";

type RepositoryTopicListProps = {
  topics: string[];
};
export const RepositoryTopicList = ({ topics }: RepositoryTopicListProps) => {
  return (
    <Stack direction="row" flexWrap="wrap">
      {topics.map((item) => {
        return (
          <Chip
            label={item}
            key={item}
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ m: 0.5 }}
          />
        );
      })}
    </Stack>
  );
};

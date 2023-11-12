"use client";
import { Stack, Typography, colors } from "@mui/material";
import { RepositoryItemProps } from "./Item";

export const RepositoryAdditionalInfo = ({ item }: RepositoryItemProps) => {
  return (
    <Stack>
      <Typography variant="body2" sx={{ color: colors.grey[50] }}>
        {item.stars} ⭐️
        {!!item.language && ` · Language: ${item.language}`}
      </Typography>
      <Typography variant="body2" sx={{ color: colors.grey[50] }}>
        Created at: {dateToLocaleString(item.createdAt)} · Updated at:{" "}
        {dateToLocaleString(item.updatedAt)}
      </Typography>
    </Stack>
  );
};

function dateToLocaleString(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

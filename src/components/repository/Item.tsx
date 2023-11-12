"use client";
import { Repository } from "@/utils/api";
import { Divider, Grid, Stack, Typography, colors } from "@mui/material";
import { RepositoryTopicList } from "./TopicList";
import { RepositoryAdditionalInfo } from "./AditionalInfo";
import { RepositoryItemHeader } from "./ItemHeader";

export type RepositoryItemProps = {
  item: Repository;
};

export const RepositoryItem = ({ item }: RepositoryItemProps) => {
  return (
    <Grid item xs={12} md={6} key={item.name}>
      <Stack
        direction="column"
        gap={2}
        border={`1px solid ${colors.grey[800]}`}
        bgcolor={colors.grey[900]}
        borderRadius={3}
        px={3}
        py={2}
        color={colors.grey[50]}
        sx={{
          px: 3,
          py: 2,
          color: colors.grey[50],
          ":hover": {
            borderColor: colors.lightBlue[500],
          },
          transition: "borderColor 0.2s ease-in-out",
        }}
      >
        <RepositoryItemHeader item={item} />
        <Divider sx={{ borderColor: colors.grey[800] }} />
        {!!item.description && (
          <Typography
            variant="body1"
            sx={{ color: colors.grey[50], overflow: "hidden" }}
          >
            {truncateDescription(item.description)}
          </Typography>
        )}
        {!!item.topics.length && <RepositoryTopicList topics={item.topics} />}
        <RepositoryAdditionalInfo item={item} />
      </Stack>
    </Grid>
  );
};

function truncateDescription(description: string) {
  if (description.length > 200) {
    return description.slice(0, 200) + "…";
  } else {
    return description;
  }
}

"use client";
import { Repository } from "@/utils/api";
import { Grid } from "@mui/material";
import { RepositoryItem } from "./Item";

type RepositoryListProps = {
  items: Repository[];
};

export const RepositoryList = ({ items }: RepositoryListProps) => {
  return (
    <Grid container spacing={4}>
      {items.map((item) => {
        return (
          <RepositoryItem key={`${item.owner}/${item.name}`} item={item} />
        );
      })}
    </Grid>
  );
};

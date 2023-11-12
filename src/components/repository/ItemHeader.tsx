"use client";
import { Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { RepositoryItemProps } from "./Item";

const HeaderDivider = () => (
  <Typography display={{ xs: "none", sm: "block" }} color="primary">
    ·
  </Typography>
);

export const RepositoryItemHeader = ({ item }: RepositoryItemProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="flex-start"
      gap={1}
      divider={<HeaderDivider />}
    >
      <Link
        variant="h2"
        color="secondary"
        href={item.url}
        target="_blank"
        rel="noopener"
        underline="hover"
        width="fit-content"
      >
        {item.name}
      </Link>

      <Stack alignItems="center" gap={1} direction="row">
        <Typography variant="body1">{item.owner}</Typography>
        <Image
          src={item.avatar}
          alt="avatar"
          style={{ borderRadius: "8px" }}
          width={24}
          height={24}
        />
      </Stack>
    </Stack>
  );
};

"use client";
import { Stack, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { ReadonlyURLSearchParams } from "next/navigation";
import { FormEvent } from "react";

type HeaderProps = {
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  searchParams: ReadonlyURLSearchParams;
  isLoading: boolean;
};

export const Header = ({
  handleSearch,
  searchParams,
  isLoading,
}: HeaderProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={3}
      width="100%"
      justifyContent="center"
      alignItems={{ xs: "center", sm: "flex-start" }}
      pb={{ xs: 2, sm: 0 }}
    >
      <Typography
        variant="h1"
        width="300px"
        textAlign={{ xs: "center", sm: "start" }}
        pt={{ xs: 0, sm: 1 }}
      >
        Repo Search
      </Typography>
      <SearchBar
        handleSearch={handleSearch}
        searchParams={searchParams}
        isLoading={isLoading}
      />
    </Stack>
  );
};

//<SearchBar />

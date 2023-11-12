"use client";
import { Stack, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { ReadonlyURLSearchParams } from "next/navigation";
import { FormEvent } from "react";

type HeaderProps = {
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  searchParams: ReadonlyURLSearchParams;
  isLoading: boolean;
  noResultsShown: boolean;
};

export const Header = ({
  handleSearch,
  searchParams,
  isLoading,
  noResultsShown,
}: HeaderProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: noResultsShown ? "column" : "row" }}
      spacing={noResultsShown ? 6 : 3}
      width="100%"
      justifyContent="center"
      alignItems={{
        xs: "center",
        sm: noResultsShown ? "center" : "flex-start",
      }}
      alignSelf="flex-start"
      pb={{ xs: 2, sm: 0 }}
    >
      <Typography
        variant="h1"
        width="300px"
        textAlign={{ xs: "center", sm: noResultsShown ? "center" : "start" }}
        pt={{ xs: 0, sm: 1 }}
      >
        Repo Search
      </Typography>
      <SearchBar
        handleSearch={handleSearch}
        searchParams={searchParams}
        isLoading={isLoading}
        noResultsShown={noResultsShown}
      />
    </Stack>
  );
};

//<SearchBar />

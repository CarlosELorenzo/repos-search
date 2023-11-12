"use client";

import { Stack } from "@mui/material";
import { RepositoryList } from "./repository/List";
import { RepositoriesSearchResult } from "@/utils/api";
import { useSearch } from "@/hooks/useSearch";
import { Header } from "./Header";
import { NoResultsMessage } from "./NoResultsMessage";
import { SearchParams } from "@/app/page";
import { ErrorMessage } from "./ErrorMessage";

type ContentProps = {
  searchParams: SearchParams;
  result: RepositoriesSearchResult | null;
};

export const HomeContent = ({ searchParams, result }: ContentProps) => {
  const {
    handleSearch,
    searchParams: clientSearchParams,
    isLoading,
  } = useSearch({ result });

  const isError = result?.error;
  const isNoResults = result?.repositoriesCount === 0 && !isError;
  const showResults =
    searchParams?.search && result?.repositories && !isError && !isNoResults;

  return (
    <Stack py={4} justifyContent="center" alignItems="center" gap={3}>
      <Header
        handleSearch={handleSearch}
        searchParams={clientSearchParams}
        isLoading={isLoading}
      />

      {isError && <ErrorMessage />}
      {isNoResults && <NoResultsMessage />}

      {showResults && (
          <RepositoryList items={result.repositories} />
      )}
    </Stack>
  );
};

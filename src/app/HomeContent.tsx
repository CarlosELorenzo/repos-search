"use client";

import { Stack } from "@mui/material";
import { RepositoryList } from "../components/repository/List";
import { Pagination } from "../components/Pagination";
import { RepositoriesSearchResult } from "@/utils/api";
import { useSearch } from "@/hooks/useSearch";
import { Header } from "../components/Header";
import { NoResultsMessage } from "../components/NoResultsMessage";
import { SearchParams } from "@/app/page";
import { ErrorMessage } from "../components/ErrorMessage";

type ContentProps = {
  searchParams: SearchParams;
  result: RepositoriesSearchResult | null;
};

export const HomeContent = ({ searchParams, result }: ContentProps) => {
  const {
    handleSearch,
    searchParams: clientSearchParams,
    isLoading,
    handlePageChange,
    page,
  } = useSearch({ result });

  const isError = result?.error;
  const isNoResults = result?.repositoriesCount === 0 && !isError;
  const showResults =
    searchParams?.search && result?.repositories && !isError && !isNoResults;

  return (
    <Stack
      py={4}
      justifyContent="center"
      alignItems="center"
      gap={showResults ? 3 : 6}
      minHeight="100%"
    >
      <Header
        handleSearch={handleSearch}
        searchParams={clientSearchParams}
        isLoading={isLoading}
        noResultsShown={!showResults}
      />

      {isError && <ErrorMessage />}
      {isNoResults && <NoResultsMessage />}

      {showResults && (
        <>
          <RepositoryList items={result.repositories} />
          <Pagination
            itemCount={result.repositoriesCount}
            onChange={handlePageChange}
            page={page}
          />
        </>
      )}
    </Stack>
  );
};

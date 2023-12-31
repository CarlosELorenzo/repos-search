"use server";
import { SearchApiParams, searchApiRequest } from "@/utils/api";
import { Container } from "@mui/material";
import { HomeContent } from "@/app/HomeContent";

export type SearchParams = {
  search: string | undefined;
  page: string | undefined;
};

type HomePageProps = {
  searchParams: SearchParams;
};

export default async function Home({ searchParams }: HomePageProps) {
  const apiParams: SearchApiParams = {
    query: searchParams?.search || "",
    page: searchParams?.page,
  };

  const result = await searchApiRequest(apiParams);

  return (
    <Container component="main" sx={{ height: "100%" }}>
      <HomeContent searchParams={searchParams} result={result} />
    </Container>
  );
}

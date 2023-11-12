"use client";
import { RepositoriesSearchResult } from "@/utils/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type useSearchProps = {
  result: RepositoriesSearchResult | null;
};

export const useSearch = ({ result }: useSearchProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, [result]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete("page");

    if (search.value) {
      setIsLoading(true);
      newParams.set("search", search.value);
    } else {
      newParams.delete("search");
    }
    router.push(createUrl("/", newParams));
  };

  return {
    searchParams,
    handleSearch,
    isLoading,
  };
};

function createUrl(path: string, params: URLSearchParams) {
  const url = new URL(path, window.location.origin);
  url.search = params.toString();
  return url.toString();
}


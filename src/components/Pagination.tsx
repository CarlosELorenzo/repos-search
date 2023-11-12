"use client";
import { Pagination as MuiPagination } from "@mui/material";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  itemCount: number;
  onChange: (e: React.ChangeEvent<unknown>, page: number) => void;
  page?: number;
};

const GITHUB_RESULT_LIMIT = 1000;

function getPageCount(itemCount: number, itemsPerPage: number) {
  const constrainedItemCount = Math.min(itemCount, GITHUB_RESULT_LIMIT);
  return Math.ceil(constrainedItemCount / itemsPerPage);
}

export const Pagination = ({ itemCount, onChange, page }: PaginationProps) => {
  const searchParams = useSearchParams();
  const itemsPerPage = parseInt(searchParams.get("itemsPerPage") ?? "") || 10;
  return (
    <MuiPagination
      count={getPageCount(itemCount, itemsPerPage)}
      variant="outlined"
      color="secondary"
      onChange={onChange}
      page={page || 1}
    />
  );
};

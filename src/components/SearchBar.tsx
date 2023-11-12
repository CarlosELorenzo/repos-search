"use client";
import {
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  colors,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReadonlyURLSearchParams } from "next/navigation";

type SearchBarProps = {
  handleSearch?: (e: React.FormEvent<HTMLFormElement>) => void;
  searchParams: ReadonlyURLSearchParams;
  isLoading: boolean;
};

export const SearchBar = ({
  handleSearch,
  searchParams,
  isLoading,
}: SearchBarProps) => {
  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSearch}
        direction="row"
        alignItems="center"
        flexGrow={1}
        borderRadius={24}
        bgcolor={colors.grey[800]}
        height="100%"
        width="100%"
        px={2}
      >
        <TextField
          id="search-bar"
          variant="standard"
          placeholder="Search for repositories in github..."
          name="search"
          size="small"
          color="primary"
          defaultValue={searchParams?.get("search") || ""}
          sx={{ flexGrow: 1 }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        {isLoading ? (
          <CircularProgress
            color="secondary"
            size={20}
            thickness={5}
            sx={{ m: "10px" }}
          />
        ) : (
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: colors.grey[100] }} />
          </IconButton>
        )}
      </Stack>
    </>
  );
};

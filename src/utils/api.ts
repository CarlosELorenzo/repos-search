import { Octokit } from "octokit";
import { parse } from "path";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface Repository {
  owner: string;
  name: string;
  description: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  topics: Array<string>;
  language: string;
  stars: number;
  url: string;
}

interface RepositoryDataRaw {
  name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
  created_at: string;
  updated_at: string;
  topics: Array<string>;
  language: string;
  stargazers_count: number;
  html_url: string;
}

interface RepositoriesSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Array<RepositoryDataRaw>;
}

export interface RepositoriesSearchResult {
  repositoriesCount: number;
  repositories: Array<Repository>;
  error: boolean;
}

export type SearchApiParams = {
  query: string;
  page?: string;
  perPage?: string;
};

export async function searchApiRequest({
  query,
  page = "1",
  perPage = "10",
}: SearchApiParams): Promise<RepositoriesSearchResult | null> {
  if (!query) return null;
  const result = await octokit.request("GET /search/repositories", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    q: query,
    page: parseInt(page),
    per_page: parseInt(perPage),
  });
  if (result.status !== 200) {
    console.error("Error fetching data from GitHub API", result);
    return {
      repositoriesCount: 0,
      repositories: [],
      error: true,
    };
  }
  return {
    repositoriesCount: result.data.total_count,
    repositories: parseApiResults(result.data as RepositoriesSearchResponse),
    error: false,
  } as RepositoriesSearchResult;
}

function parseApiResults(apiResults: RepositoriesSearchResponse) {
  const items = apiResults.items;
  const parsedItems = items.map((item) => {
    const parsedItem: Repository = {
      owner: item.owner.login,
      name: item.name,
      description: item.description,
      avatar: item.owner.avatar_url,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      topics: item.topics,
      language: item.language,
      stars: item.stargazers_count,
      url: item.html_url,
    };
    return parsedItem;
  });
  return parsedItems;
}

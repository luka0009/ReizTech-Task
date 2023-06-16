export interface Country {
  name: string;
  region: string;
  area: number;
  independent?: boolean;
}

export interface FetchResponse {
  isLoading: boolean;
  error: string;
  data: Country[] | null;
  refetch: () => void;
}

export type SortType = "Name ascending" | "Name descending";

export interface SortComponentProps {
  setSortValue: (sortValue: SortType) => void;
}

export interface PaginationProps {
  totalCountries: number | undefined;
  countriesPerPage: number;
  setCurrentPage: (number: number) => void;
  currentPage: number;
}

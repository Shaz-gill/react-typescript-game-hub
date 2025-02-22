import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 + 1000, // 24h
  });

export default useGenres;

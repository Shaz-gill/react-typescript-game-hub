import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 + 1000, // 24h
  });

export default useGenres;

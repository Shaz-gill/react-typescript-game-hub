import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 + 1000, // 24h
  });

export default usePlatform;

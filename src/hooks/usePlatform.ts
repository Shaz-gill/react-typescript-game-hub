import { useQuery } from "@tanstack/react-query";
import apiClients from "../services/api-clients";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClients
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 + 1000, // 24h
  });

export default usePlatform;

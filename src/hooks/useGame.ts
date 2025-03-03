import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug], // Every time when slug changes, then the react query will fetch another game from the API
    queryFn: () => apiClient.get(slug),
  });

export default useGame;

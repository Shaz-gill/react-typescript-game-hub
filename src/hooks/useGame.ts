import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Game>("/games");

// OLD CODE (DON'T DELETE)
// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   dependency?: any
// ) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(
//     () => {
//       const controller = new AbortController();

//       setLoading(true);
//       apiClients
//         .get<FetchResponse<T>>(endpoint, {
//           signal: controller.signal,
//           ...requestConfig,
//         })
//         .then((response) => {
//           setData(response.data.results);
//           setLoading(false);
//         })
//         .catch((error) => {
//           if (error instanceof CanceledError) return;
//           setError(error.message);
//           setLoading(false);
//         });

//       return () => controller.abort();
//     },
//     dependency ? [...dependency] : []
//   );

//   return { data, error, isLoading };
// };

// export default useData;

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug], // Every time when slug changes, then the react query will fetch another game from the API
    queryFn: () => apiClient.get(slug),
  });

export default useGame;

import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // An array of objects, each containing a `platform` of type `PlatForm`
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;

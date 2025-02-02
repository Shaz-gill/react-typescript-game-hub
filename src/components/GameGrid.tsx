import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<FetchGameResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

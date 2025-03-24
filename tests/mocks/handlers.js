import { http, HttpResponse } from "msw";

const base_url = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.get(`${base_url}/games`, (req) => {

    const url = new URL(req.request.url);
    const key = url.searchParams.get("key");
    const page = url.searchParams.get("page");
    const pageSize = url.searchParams.get("page_size");
    const genreId = url.searchParams.get("genres");

    if (key && page === "2" && pageSize === "10" && genreId === "4") {
      return HttpResponse.json({
        results: [
          {
            id: 1,
            name: "The Revenge of Shinobi",
            background_image: "action1.jpg",
            slug: "action-game-one",
            genres: [{ id: 4, name: "Action" }],
            metacritic: 98,
          },
        ],
      });
    }
    if (key && page === "12" && pageSize === "10" && genreId === "5") {
      return HttpResponse.json({
        results: [
          {
            id: 1,
            name: "Skyrim",
            background_image: "rpg.jpg",
            slug: "rpg-game-one",
            genres: [{ id: 4, name: "RPG" }],
            metacritic: 99,
          },
        ],
      });
    }
    if (key && page === "1" && pageSize === "10" && genreId === "51") {
      return HttpResponse.json({
        results: [
          {
            id: 1,
            name: "Indie Game",
            background_image: "indie.jpg",
            slug: "indie-game-one",
            genres: [{ id: 4, name: "Indie" }],
            metacritic: 85,
          },
        ],
      });
    }

    return HttpResponse.json({ results: [] });
  }),
];
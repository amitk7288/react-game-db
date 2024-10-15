import { useEffect } from "react";

export default function TestAPI() {
  const rawg_api = import.meta.env.REACT_APP_RAWG_API;

  // redux store slices required
  // - games
  // - genres (action, rpg etc.) ✅
  // - parent platforms (nintendo, sega etc.)
  //  -- platforms (snes, nes, genesis, sega saturn etc.)
  // - work out how to get details of platform
  // - publishers (bethesda, electronic arts etc.)
  // -storefronts maybe

  // ${base_url}/games?key=${api_key}&page_size=6&genres=${genre}

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/platforms/lists/parents?key=caf456a7b31d44debb2e8c049727e4a7`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("TEST", data);
      });
  }, [rawg_api]);

  return <div></div>;
}

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./App.jsx";
import "./index.css";

import ErrorPage from "./components/ui-components/ErrorPage.jsx";
import MainView from "./components/mainview/MainView.jsx";
import GenresPage from "./routes/genres/GenresPage.jsx";
import Library from "./routes/Library.jsx";
import Friends from "./routes/Friends.jsx";
import Favourites from "./routes/Favourites.jsx";
import Wishlist from "./routes/Wishlist.jsx";
import GenrePage from "./routes/genres/GenrePage.jsx";
import Collections from "./routes/Collections.jsx";
import CollectionPage from "./routes/CollectionPage.jsx";
import SingleGamePage from "./routes/SingleGamePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainView />,
        children: [
          {
            path: "/game/:gameId/:gameName",
            element: <SingleGamePage />,
          },
          {
            path: "/genres",
            element: <GenresPage />,
          },
          {
            path: "/genre/:genreId/:slug",
            element: <GenrePage />,
          },
          {
            path: "/library",
            element: <Library />,
          },
          {
            path: "/friends",
            element: <Friends />,
          },
          {
            path: "/favourites",
            element: <Favourites />,
          },
          {
            path: "/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/collections",
            element: <Collections />,
          },
          {
            path: "/collection/:id/:title",
            element: <CollectionPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

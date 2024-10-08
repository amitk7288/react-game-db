import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import ErrorPage from './components/ui-components/ErrorPage.jsx';
import MainView from './components/mainview/MainView.jsx';
import CategoryPage from './routes/categories/CategoryPage.jsx';
import Library from "./routes/Library.jsx"
import Friends from "./routes/Friends.jsx";
import Favourites from "./routes/Favourites.jsx";
import Wishlist from "./routes/Wishlist.jsx";

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
            path: "/categories/action",
            element: <CategoryPage />,
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
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);

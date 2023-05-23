import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Podcasts } from "./components/Podcasts";
import { PodcastView } from "./components/PodcastView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/podcasts",
        element: <Podcasts></Podcasts>,
      },
      {
        path: "/podcast/:id",
        element: <PodcastView></PodcastView>,
      },
    ],
  },
]);

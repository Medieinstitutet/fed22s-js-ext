import { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import {
  PodcastContext,
  PodcastDispatchContext,
} from "./contexts/PodcastContext";
import { PodcastReducer } from "./reducers/podcastReducer";
import { router } from "./Router";
import { getPodcasts } from "./services/podcastService";

function App() {
  const [podcasts, dispatch] = useReducer(PodcastReducer, []);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getPodcasts();

      dispatch({ type: "gotpodcasts", payload: JSON.stringify(dataFromApi) });
    };

    if (podcasts.length === 0) getData();
  }, [podcasts]);

  return (
    <PodcastContext.Provider value={podcasts}>
      <PodcastDispatchContext.Provider value={dispatch}>
        <RouterProvider router={router}></RouterProvider>
      </PodcastDispatchContext.Provider>
    </PodcastContext.Provider>
  );
}

export default App;

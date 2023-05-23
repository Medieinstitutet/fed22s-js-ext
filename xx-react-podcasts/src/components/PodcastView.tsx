import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PodcastContext,
  PodcastDispatchContext,
} from "../contexts/PodcastContext";
import { IPodcast } from "../models/IPodcast";

export const PodcastView = () => {
  const { id } = useParams();
  const podcasts = useContext(PodcastContext);
  const dispatch = useContext(PodcastDispatchContext);

  const [podcast, setPodcast] = useState<IPodcast>();

  useEffect(() => {
    if (podcast) return;

    if (id) {
      setPodcast(podcasts.find((p) => p.id.toString() === id));
    }
  }, [id, podcasts, podcast]);

  return (
    <h3
      onClick={() => {
        if (podcast?.id) {
          dispatch({ type: "listened", payload: podcast.id.toString() });
        }
      }}
    >
      {podcast?.name}
    </h3>
  );
};

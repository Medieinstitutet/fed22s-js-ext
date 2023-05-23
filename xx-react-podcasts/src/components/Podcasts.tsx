import { useContext } from "react";
import { PodcastContext } from "../contexts/PodcastContext";
import "./../style/Podcasts.scss";
import { Podcast } from "./Podcast";

export const Podcasts = () => {
  const podcasts = useContext(PodcastContext);

  return (
    <div>
      {podcasts.map((p) => (
        // <li
        //   onClick={() => navigate(`/podcast/${p.id}`)}
        //   className={p.listened ? "listened" : ""}
        //   key={p.id}
        // >
        //   {p.name}
        // </li>

        <Podcast podcast={p} key={p.id}></Podcast>
      ))}
    </div>
  );
};

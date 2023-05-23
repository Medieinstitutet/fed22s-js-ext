import { useNavigate } from "react-router-dom";
import { IPodcast } from "../models/IPodcast";

interface IPodcastProps {
  podcast: IPodcast;
}

export const Podcast = ({ podcast }: IPodcastProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/podcast/${podcast.id}`)}
      className={podcast.listened ? "listened" : ""}
    >
      {podcast.name}
    </div>
  );
};

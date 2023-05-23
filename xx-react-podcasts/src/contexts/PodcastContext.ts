import { IPodcast } from "./../models/IPodcast";
import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/podcastReducer";

export const PodcastContext = createContext<IPodcast[]>([]);

export const PodcastDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});

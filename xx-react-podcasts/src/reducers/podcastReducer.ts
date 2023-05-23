import { IPodcast } from "./../models/IPodcast";

export interface IAction {
  type: string;
  payload: string;
}

export const PodcastReducer = (
  podcasts: IPodcast[],
  action: IAction
): IPodcast[] => {
  switch (action.type) {
    case "gotpodcasts": {
      saveToLs(JSON.parse(action.payload));
      return JSON.parse(action.payload);
    }

    case "listened": {
      const newState = podcasts.map((p) => {
        if (p.id.toString() === action.payload) {
          return { ...p, listened: !p.listened };
        } else {
          return p;
        }
      });
      saveToLs(newState);
      return newState;
    }

    default:
      break;
  }

  return podcasts;
};

const saveToLs = (podcasts: IPodcast[]) => {
  localStorage.setItem("podcasts", JSON.stringify(podcasts));
};

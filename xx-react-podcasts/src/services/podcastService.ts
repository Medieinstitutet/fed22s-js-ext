import { IApiReponse } from "./../models/IPodcast";
import axios from "../../node_modules/axios/index";

const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const getPodcasts = async () => {
  try {
    const dataFromLs = localStorage.getItem("podcasts");

    if (dataFromLs) {
      return JSON.parse(dataFromLs);
    }

    const response = await get<IApiReponse>(
      "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json"
    );

    return response.data.programs;
  } catch {
    throw new Error("Could not get data from api");
  }
};

import { IMovie } from "./../models/IMovie";
import axios from "axios";

const BASE_URL =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getMovies = async (): Promise<IMovie[]> => {
  return await get<IMovie[]>("");
};

export const getMovieById = async (id: number): Promise<IMovie> => {
  return await get<IMovie>(`/${id}`);
};

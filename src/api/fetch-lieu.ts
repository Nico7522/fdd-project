import axios, { AxiosResponse } from "axios";
import { LieuResponse } from "../types/lieu";

export const fetchLieux = () => {
  return axios
    .get("https://api.api-onepiece.com/v2/locates/fr")
    .then(({ data }: AxiosResponse<LieuResponse[]>) => {
      return data;
    });
};

import axios, { AxiosResponse } from "axios";
import { LieuResponse } from "../types/lieu";

export const fetchLieux = () => {
  return axios
    .get("https://api.api-onepiece.com/locates")
    .then(( {data} : AxiosResponse<LieuResponse[]>) => {
      return data;
    });
};

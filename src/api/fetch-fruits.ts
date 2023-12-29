import axios from "axios";
import { FruitsResponse } from "../types/fruit";

export const fetchFruits = () => {
  return axios
    .get(`https://api.api-onepiece.com/v2/fruits/fr`)
    .then(({ data }: { data: FruitsResponse[] }) => {
      return data;
    });
};

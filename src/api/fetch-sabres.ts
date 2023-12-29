import axios from "axios";
import { SabreResponse } from "../types/sabre";

export const fetchSabres = () => {
  console.log("coucou");

  return axios
    .get(`https://api.api-onepiece.com/v2/swords/fr`)
    .then(({ data }: { data: SabreResponse[] }) => {
      return data;
    });
};

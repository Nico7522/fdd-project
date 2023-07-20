import React, { Dispatch, SetStateAction, useContext } from "react";
import style from "./style.module.css";
import { Dark } from "../../App";
import { categorieFruitEnum } from "../../utils/options-fruit-enum";

type PropsSelectFormFruit = {
  categorie: string;
  setCategorie: Dispatch<SetStateAction<string>>;
};
export default function SelectFormfruit({
  categorie,
  setCategorie,
}: PropsSelectFormFruit) {
  const dark = useContext(Dark);
  return (
    <div
      className={style["select-dropdown"] + " " + (dark ? style["dark"] : "")}
    >
      <select
        value={categorie}
        className={dark ? style["dark"] : ""}
        onChange={(e) => setCategorie(e.target.value)}
        name=""
        id="categorie"
      >
        {Object.keys(categorieFruitEnum).map((key) => {
          return (
            <option key={key} className={dark ? style["dark"] : ""} value={key}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
}

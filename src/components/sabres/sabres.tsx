import style from "./style.module.css";
import franceLogo from "../../images/france.png";
import japonLogo from "../../images/japon.png";
import ModalDescription from "../modal/modal";
import { useState } from "react";
import sabreImage from "../../utils/sabre-image.json";
import Yoru from "../../images/yoru.jpg";
type PropsSabre = {
  id: number;
  french_name: string;
  roman_name: string;
  type: string;
  category: string;
  description: string;
  is_destroy: boolean;
  link: string
};

export default function Sabre({
  id,
  french_name,
  roman_name,
  type,
  category,
  description,
  is_destroy,
  link
}: PropsSabre) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={style["sabre-component"]}>
      <h3>
        <img src={japonLogo} width={20} alt="" />
        <br />
        {roman_name}
      </h3>
      <h4>
        <img src={franceLogo} width={20} alt="" />
        <br />
        {french_name}
      </h4>
      <p className={style["type"]}>{type ? type : "Inconnu"}</p>
      <div>
            <img
              className={style["img"]}
              src={"http://localhost:5173/src/images/" + link}
              alt=""
            />
         
      
      </div>
      {/* <div className={style["img-container"]}>
          {filename ? (<img
            className={style["img"]}
            src={`https://images.api-onepiece.com/fruits/${filename}`}
            alt=""
          />) : (<p>Pas de visuel pour le moment</p>)}
          
        </div> */}
      <button
        className={style["btn-description"]}
        onClick={() => setModal(!modal)}
      >
        Description
      </button>
      {modal && (
        <ModalDescription
          description={description}
          className={style["modal"]}
          setModal={setModal}
        />
      )}
    </div>
  );
}

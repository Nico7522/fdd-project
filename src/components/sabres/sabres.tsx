import style from "./style.module.css";
import franceLogo from "../../images/france.png";
import japonLogo from "../../images/japon.png";
import ModalDescription from "../modal/modal";
import { useContext, useState } from "react";
import sabreDetails from "../../utils/sabre-image.json";
import SabreImage from "./sabres-image";
import { Dark } from "../../App";
type PropsSabre = {
  id: number;
  french_name: string;
  roman_name: string;
  type: string;
  category: string;
  description: string;
  is_destroy: boolean;

};

export default function Sabre({
  french_name,
  roman_name,
  type,
  description,

  
}: PropsSabre) {
  const dark = useContext(Dark)
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={style["sabre-component"]}>
      <h3 className={dark ? style['title-black'] : style['title-normal']}>
        <img src={japonLogo} width={20} alt="" />
        <br />
        {roman_name}
      </h3>
      <h4 className={dark ? style['title-black'] : style['title-normal']}>
        <img src={franceLogo} width={20} alt="" />
        <br />
        {french_name}
      </h4>
      <p className={style["type"]}>{type ? type : "Inconnu"}</p>
   
      <SabreImage sabreDetails={sabreDetails.sabreImage} frenchName={french_name} />
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

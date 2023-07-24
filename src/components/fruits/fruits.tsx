import { FruitsResponse } from "../../types/fruit.ts";
import franceLogo from "../../images/france.png";
import japonLogo from "../../images/japon.png";
import style from "./style.module.css";
import ModalDescription from "../modal/modal";
import { useContext, useState } from "react";
import { Dark } from "../../App.tsx";
export default function Fruit({
  roman_name,
  french_name,
  description,
  type,
  filename,
  
}: FruitsResponse) {
  const dark = useContext(Dark)
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div  className={style["fruit-component"]}>
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
      <p className={style['type']}>{type}</p>
      <div className={style["img-container"]}>
        {filename ? (<img
          className={style["img"]}
          src={`https://images.api-onepiece.com/fruits/${filename}`}
          alt=""
        />) : (<p className={dark ? style['title-black'] : style['title-normal']}>Pas de visuel pour le moment</p>)}
        
      </div>
      <button className={style['btn-description']} onClick={() => setModal(!modal)}>Description</button>
     {modal && <ModalDescription description={description} className={style["modal"]} setModal={setModal} />}
    </div>
  );
}
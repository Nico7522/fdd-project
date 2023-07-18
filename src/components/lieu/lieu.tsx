import React, { useContext, useState } from "react";
import LieuDetails from '../../utils/ile-image.json'
import style from "./style.module.css"
import { Dark } from "../../App";
import franceLogo from "../../images/france.png";
import japonLogo from "../../images/japon.png";
import { LieuResponse } from "../../types/lieu";

import LieuImages from "./lieux-image";
export default function Lieu({
  id, french_name, roman_name, sea_name, region_name,affiliation_name}: LieuResponse) {
   
    
  const dark = useContext(Dark)
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={style["lieu-component"]}>
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
      <LieuImages LieuDetails={LieuDetails.ilesImage} frenchName={french_name} />

    </div>
  );
}
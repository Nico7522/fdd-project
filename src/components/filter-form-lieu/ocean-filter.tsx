import React, { Dispatch, MouseEvent, SetStateAction } from 'react'
import style from './style.module.css'

type PropsOceanFilter = {
    className: boolean,
    setSelectedLieu: Dispatch<SetStateAction<string>>;
    setShow: Dispatch<SetStateAction<boolean>>;
}
export default function OceanFilter({className, setSelectedLieu, setShow}: PropsOceanFilter) {
    const handleLieu = (e: MouseEvent) => {
        const value = e.target as HTMLLIElement;
        setSelectedLieu(value.innerHTML);
        setShow(false);
      };
  return (
    <div className={style["selected-item"]}>
    <ul
      className={
        style["base-ul"] + " " + (className ? style["show"] : " ")
      }
    >
      <li onClick={(e) => handleLieu(e)}>East Blue</li>
      <li onClick={(e) => handleLieu(e)}>West Blue</li>
      <li onClick={(e) => handleLieu(e)}>North Blue</li>
      <li onClick={(e) => handleLieu(e)}>South Blue</li>
      <li onClick={(e) => handleLieu(e)}>Red Line</li>
      <li onClick={(e) => handleLieu(e)}>Calm Belt</li>
      <li onClick={(e) => handleLieu(e)}>Paradis</li>
      <li onClick={(e) => handleLieu(e)}>
        Nouveau Monde
      </li>
    </ul>
  </div>
  )
}

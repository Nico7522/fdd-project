import React, { Dispatch, SetStateAction } from 'react'
import style from './style.module.css'

type PropsOceanFilter = {
    className: boolean,
    setSelectedLieu: Dispatch<SetStateAction<string>>
}
export default function OceanFilter({className, setSelectedLieu}: PropsOceanFilter) {
  return (
    <div className={style["selected-item"]}>
    <ul
      className={
        style["base-ul"] + " " + (className ? style["show"] : " ")
      }
    >
      <li onClick={() => setSelectedLieu("East Blue")}>East Blue</li>
      <li onClick={() => setSelectedLieu("West Blue")}>West Blue</li>
      <li onClick={() => setSelectedLieu("North Blue")}>North Blue</li>
      <li onClick={() => setSelectedLieu("South Blue")}>South Blue</li>
      <li onClick={() => setSelectedLieu("Red Line")}>Red Line</li>
      <li onClick={() => setSelectedLieu("Calm Belt")}>Calm Belt</li>
      <li onClick={() => setSelectedLieu("Paradis")}>Paradis</li>
      <li onClick={() => setSelectedLieu("Nouveau Monde")}>
        Nouveau Monde
      </li>
    </ul>
  </div>
  )
}

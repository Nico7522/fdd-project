import style from "./style.module.css";
import sabre from "../../images/sabre.jpg";
import ile from "../../images/ile.jpg";
import fruit from "../../images/allfruits.jpg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Dark } from "../../App";
export default function Home() {
    const dark = useContext(Dark);


  return (
    <div>
      <h1
        className={
          dark === true ? style["dark"] : style["title-home"]
        }
      >
        Bienvenue sur la mini encyclopédie One Piece !
      </h1>
      <div className={style["nav-container"]}>
        <FruitsNavigation />
        <SabresNavigation />
        <IlesNavigation />
      </div>
    </div>
  );
}

const FruitsNavigation = () => {
  const dark = useContext(Dark);

  return (
    <div
      className={
        dark === true
          ? style["nav-categorie-dark"]
          : style["nav-categorie"]
      }
    >
      <NavLink to={"fruits"}>
        <h3>Voir la liste des fruits</h3>
        <div className={style["image-container"]}>
          <img className={style["image"]} src={fruit} height={150} alt="" />
        </div>
      </NavLink>
    </div>
  );
};

const SabresNavigation = () => {
  const dark = useContext(Dark);

  return (
    <div
      className={
        dark === true
          ? style["nav-categorie-dark"]
          : style["nav-categorie"]
      }
    >
      <NavLink to={"sabres"}>
        <h3>Voir la liste des sabres</h3>
        <div className={style["image-container"]}>
          <img className={style["image"]} src={sabre} height={150} alt="" />
        </div>
      </NavLink>
    </div>
  );
};

const IlesNavigation = () => {
  const dark = useContext(Dark);
  return (
    <div
      className={
        dark === true
          ? style["nav-categorie-dark"]
          : style["nav-categorie"]
      }
    >
      <NavLink to={"lieux"}>
        <h3>Voir la liste des lieux</h3>
        <div className={style["image-container"]}>
          <img className={style["image"]} src={ile} height={150} alt="" />
        </div>
      </NavLink>
    </div>
  );
};

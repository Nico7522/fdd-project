import style from "./style.module.css";
import React, { useState, useEffect } from "react";
import MenuImage from "../../images/barre-de-menu.png"
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth)

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
        setWidth(window.innerWidth)
        if (window.innerWidth > 500) {
            setToggleMenu(false)
        }
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <nav>
      {(toggleMenu || width > 500) && (
        <ul className={style["liste"]}>
          <li className={style["items"]}>Fruits</li>
          <li className={style["items"]}>Sabres</li>
          <li className={style["items"]}>Iles</li>
        </ul>
      )}

      <img className={style["btn-toggle"]} onClick={toggleNavSmallScreen} src={MenuImage}/>
    </nav>
  );
}

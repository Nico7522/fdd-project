import style from "./style.module.css";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import MenuImage from "../../images/barre-de-menu.png"
import { NavLink } from "react-router-dom";
import Home from '../../images/home.jpg'


type PropsNavBar = {
  darkMode: boolean,
  setDarkMode: Dispatch<SetStateAction<boolean>>
}



export default function Navbar({darkMode, setDarkMode}: PropsNavBar) {
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

  const closeMenu = () => {
    setToggleMenu(false)
  }
  return (
    <nav>
      {(toggleMenu || width > 500) && (
        <ul className={style["liste"]}>
          <li onClick={closeMenu} id={style['img']} className={style["items"]}><NavLink to='/'><img src={Home} width={30} height={22} alt="" /></NavLink></li>
          <li onClick={closeMenu} className={style["items"]}><NavLink to='/fruits'>Fruits</NavLink></li>
          <li onClick={closeMenu} className={style["items"]}><NavLink to='/sabres'>Sabres</NavLink></li>
          <li onClick={closeMenu} className={style["items"]}><NavLink to='/lieux'>Lieux</NavLink></li>
          <li onClick={() => setDarkMode(!darkMode)} className={style["items"]}>Dark Mode</li>
        </ul>
      )}

      <img className={style["btn-toggle"]} onClick={toggleNavSmallScreen} src={MenuImage}/>
    </nav>
  );
}

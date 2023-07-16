import style from './style.module.css'
import sabre from '../../images/sabre.jpg'
import ile from '../../images/ile.jpg'
import fruit from '../../images/allfruits.jpg'
import { NavLink } from 'react-router-dom'
export default function Home(){

    return(
        <div>
            <h1 className={style['title-home']}>Bienvenue sur la mini encyclopédie One Piece !</h1>
            <div className={style['nav-container']}>
            <FruitsNavigation />
            <SabresNavigation />
            <IlesNavigation />

            </div>
        </div>
    )
}

const FruitsNavigation = () => {

    return (
        <div className={style['nav-categorie']}>
            <NavLink to={'fruits'} >
            <h3>Voir la liste des fruits</h3>
            <div className={style['image-container']}>
                <img className={style['image']} src={fruit} height={150} alt="" />
            </div>
            </NavLink>
        </div>
    )
}

const SabresNavigation = () => {

    return (
        <div className={style['nav-categorie']}>
          
            <NavLink to={'sabres'} >
            <h3>Voir la liste des sabres</h3>
            <div className={style['image-container']}>
                <img className={style['image']} src={sabre} height={150} alt="" />
            </div>
            </NavLink>
        </div>
    )
}

const IlesNavigation = () => {

    return (
        <div className={style['nav-categorie']}>
            <NavLink to={'fruits'} >
            <h3>Voir la liste des îles</h3>
            <div className={style['image-container']}>
                <img className={style['image']} src={ile} height={150}  alt="" />
            </div>
            </NavLink>
         
        </div>
    )
}
import { SabreDetails } from "../../types/sabre"
import style from "./style.module.css"
type PropsSabreImage = {
    sabreDetails: SabreDetails[],
    frenchName: string;
}

export default function SabreImage({ sabreDetails, frenchName }: PropsSabreImage){

    return (
        <div className={style['img-container']}>
            {sabreDetails.map(s => (
               frenchName === s.name && <img key={s.name} className={style['img']} src={"http://localhost:5173/src/images/" + s.link} alt="" />

            ))}
        </div>
    )
}
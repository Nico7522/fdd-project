import { IlesDetails } from "../../types/lieu";
import style from "./style.module.css"
type PropsIleImage = {
    LieuDetails: IlesDetails[],
    frenchName: string;
}

export default function LieuImages({ LieuDetails, frenchName }: PropsIleImage){
    
    
    return (
        <div className={style['img-container']}>
            {LieuDetails.map(l => (
               frenchName === l.name && <img  key={l.name} className={style['img']} src={"https://api-image-op.netlify.app/public/images/" + l.link} alt="" />

            ))}
        </div>
    )
}
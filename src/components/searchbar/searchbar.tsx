import { Dispatch, SetStateAction } from "react"
import style from './style.module.css'
type PropsSearchBar = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>
}
export default function SearchBar({value, setValue}: PropsSearchBar){

 
    return (
        <form>
            <input className={style["search-bar"]} placeholder="Rechercher..." value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        </form>
    )
}
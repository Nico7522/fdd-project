import { Dispatch, SetStateAction, useState } from "react"
type PropsSearchBar = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>
}
export default function SearchBar({value, setValue}: PropsSearchBar){
    const [search, setSearch] = useState<string>("")
 
    return (
        <form>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        </form>
    )
}
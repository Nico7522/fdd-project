import { useEffect, useState } from "react";
import { useFetchSabre } from "../../hooks/sabre"
import { SabreResponse } from "../../types/sabre";
import style from "./style.module.css"
import "../../App.css";
import SearchBar from "../../components/searchbar/searchbar";
import Sabre from "../../components/sabres/sabres";


export default function Sabres(){
    const { data, error, loading} = useFetchSabre()
    const [filteredData, setFilteredData] = useState<SabreResponse[]>([]);
    const [page, setPage] = useState<number>(12);
    const [value, setValue] = useState<string>("");
    console.log(data);
    useEffect(() => {
        if (data) {
          const filtered = data.filter((sabre: SabreResponse) => {
            return sabre.french_name.toLowerCase().includes(value.toLowerCase());
          });
          setFilteredData(filtered);
        }
      }, [value, data, page]);

      if (loading) {
        return <div className="loader"></div>;
      }
    return (
        <>
         <h1>Les Sabres</h1>
         <SearchBar value={value} setValue={setValue} />
         <div className={style["sabres-container"]}>
        {filteredData?.slice(0, page).map((sabre: SabreResponse) => {
          return <Sabre {...sabre} />;
        })}
        </div>
      {value === "" && (
        <button
          className={style["next-data"]}
          onClick={() => setPage((page) => page + 12)}
        >
          Load More
        </button>
    )}
    </>
)}
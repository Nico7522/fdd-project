import { useContext, useEffect, useState } from "react";
import { useFetchSabre } from "../../hooks/sabre";
import { SabreResponse } from "../../types/sabre";
import style from "./style.module.css";
import "../../App.css";
import SearchBar from "../../components/searchbar/searchbar";
import Sabre from "../../components/sabres/sabres";

import { Dark } from "../../App";

export default function Sabres() {
  const { data, loading } = useFetchSabre();
  const [filteredData, setFilteredData] = useState<SabreResponse[]>([]);
  const [page, setPage] = useState<number>(12);
  const [value, setValue] = useState<string>("");
  const dark = useContext(Dark);
  useEffect(() => {
    if (data) {
      const filtered = data.filter((sabre: SabreResponse) => {
        return sabre.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredData(filtered);
    }
  }, [value, data, page]);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <h1 className={dark ? style["title-black"] : style["title-normal"]}>
        Les Sabres
      </h1>
      <SearchBar value={value} setValue={setValue} />
      <div className={style["sabres-container"]}>
        {filteredData?.slice(0, page).map((sabre: SabreResponse) => {
          return <Sabre key={sabre.id} {...sabre} />;
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
  );
}

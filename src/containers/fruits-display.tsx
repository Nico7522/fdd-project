import { useContext, useEffect, useState } from "react";
import Fruit from "../components/fruits/fruits";
import SearchBar from "../components/searchbar/searchbar";
import { useFetchFruit } from "../hooks/fruit";
import style from "./style.module.css";
import "../App.css";
import { FruitsResponse } from "../types/fruit";
import { Dark } from "../App";
export default function Fruits() {
  const dark = useContext(Dark)
  const { data, error, loading } = useFetchFruit();
  const [filteredData, setFilteredData] = useState<FruitsResponse[]>([]);
  const [page, setPage] = useState<number>(12);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (data) {
      const filtered = data.filter((fruit: FruitsResponse) => {
        return fruit.french_name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredData(filtered);
    }
  }, [value, data, page]);
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <>
    <h1 className={dark ? style['title-black'] : style['title-normal']}>Les fruits du Démon</h1>
      <SearchBar value={value} setValue={setValue} />

      <div className={style["fruits-container"]}>
        {filteredData?.slice(0, page).map((fruit: FruitsResponse) => {
          return <Fruit key={fruit.id} {...fruit} />;
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

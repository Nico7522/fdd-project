import { useEffect, useState } from "react";
import Fruit from "../components/fruits/fruits";
import SearchBar from "../components/searchbar/searchbar";
import { useFetchFruit } from "../hooks/fruit";
import style from "./style.module.css";
import { FruitsResponse } from "../types/fruit";
export default function Fruits() {
  const { data, error, loading } = useFetchFruit();
  const [filteredData, setFilteredData] = useState<FruitsResponse[]>([]);
  const [page, setPage] = useState<number>(13);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (data) {
      const filtered = data.slice(1, page).filter((fruit: FruitsResponse) => {
        return fruit.french_name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredData(filtered);
    }
  }, [value, data, page]);
  if (loading) {
    return <div className={style["loader"]}></div>;
  }
  return (
    <>
      <SearchBar value={value} setValue={setValue} />

      <div className={style["fruits-container"]}>
        {filteredData?.map((fruit: FruitsResponse) => {
          return <Fruit {...fruit} />;
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

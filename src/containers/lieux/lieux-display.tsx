import { useContext, useEffect, useState } from 'react'
import style from './style.module.css'
import "../../App.css";

import Lieu from '../../components/lieu/lieu'
import { usefetchLieu } from '../../hooks/lieu'
import { LieuResponse } from '../../types/lieu';
import { Dark } from '../../App';
import SearchBar from '../../components/searchbar/searchbar';
export default function Lieux() {

  const { data, error, loading } = usefetchLieu();
  const [filteredData, setFilteredData] = useState<LieuResponse[]>([]);
  const [page, setPage] = useState<number>(12);
  const [value, setValue] = useState<string>("");
  const dark = useContext(Dark)
  useEffect(() => {
    if (data) {
      const filtered = data.filter((sabre: LieuResponse) => {
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
      <h1 className={dark ? style['title-black'] : style['title-normal']}>Les lieux</h1>
      <SearchBar value={value} setValue={setValue} />
      <div className={style["lieux-container"]}>
        {filteredData?.slice(0, page).map((lieu: LieuResponse) => {
          return <Lieu key={lieu.id} {...lieu} />;
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


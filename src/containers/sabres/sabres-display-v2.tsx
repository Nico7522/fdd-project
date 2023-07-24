import { useEffect, useState } from "react";
import { useFetchSabre } from "../../hooks/sabre";
import { SabreResponse } from "../../types/sabre";
import style from "./style.module.css";
import "../../App.css";
import SearchBar from "../../components/searchbar/searchbar";
import Sabre from "../../components/sabres/sabres";
import sabreDetails from "../../utils/sabre-image.json";


// Version avec concat des data et du fichier JSON pour les images
export default function Sabres() {
  const { data, loading } = useFetchSabre();
  const [filteredData, setFilteredData] = useState<SabreResponse[]>([]);
  const [allData, setAllData] = useState<SabreResponse[]>([]);
  const [page, setPage] = useState<number>(12);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    let temp: SabreResponse[] = [];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        temp.push(Object.assign(data[i], sabreDetails.sabreImage[i]));
      }
      setAllData(temp);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const filtered = allData.filter((sabre: SabreResponse) => {
        return sabre.french_name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredData(filtered);
    }
  }, [allData, value, page]);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <h1>Les Sabres</h1>
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

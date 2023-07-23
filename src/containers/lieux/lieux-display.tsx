import { MouseEvent, useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import "../../App.css";

import Lieu from "../../components/lieu/lieu";
import { usefetchLieu } from "../../hooks/lieu";
import { LieuResponse } from "../../types/lieu";
import { Dark } from "../../App";
import SearchBar from "../../components/searchbar/searchbar";
export default function Lieux() {
  const { data, error, loading } = usefetchLieu();
  const [filteredData, setFilteredData] = useState<LieuResponse[]>([]);
  const [page, setPage] = useState<number>(12);
  const [value, setValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [className, setClassName] = useState<boolean>(false);
  const [selectedLieu, setSelectedLieu] = useState<string>("");
  console.log(filter);

  const dark = useContext(Dark);

  useEffect(() => {
    if (filter !== "all") {
      setClassName(true);
    }
    return () => {
      setClassName(false);
      setPage(12)
      setSelectedLieu('')
    };
  }, [filter]);
  useEffect(() => {
    if (data) {
      if (filter === "oceans") {
        const filteredLieu = data.filter((lieu: LieuResponse) => {
          return lieu.sea_name
            .toLowerCase()
            .includes(selectedLieu.toLowerCase());
        });
        const filtered = filteredLieu.filter((lieu: LieuResponse) => {
          return lieu.french_name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
      } else if (filter === "regions") {
        const filteredLieu = data.filter((lieu: LieuResponse) => {
          return lieu.region_name
            .toLowerCase()
            .includes(selectedLieu.toLowerCase());
        });
        const filtered = filteredLieu.filter((lieu: LieuResponse) => {
          return lieu.french_name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
      } else {
        const filtered = data.filter((lieu: LieuResponse) => {
          return lieu.french_name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
      }
    }
  }, [value, data, page, selectedLieu, filter]);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <h1 className={dark ? style["title-black"] : style["title-normal"]}>
        Les lieux
      </h1>
      <SearchBar value={value} setValue={setValue} />
      <div className={style["multiselect-container"]}>
        {/* TODO: faire un composant pour le select */}
        <div
          className={
            style["select-dropdown"] + " " + (dark ? style["dark"] : "")
          }
        >
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="oceans">Océans</option>
            <option value="regions">Régions</option>
          </select>
        </div>
        {/*TODO: faire un composant avec ENUM pour la liste des océans*/}
        {filter === "oceans" && (
          <div className={style["selected-item"]}>
            <ul
              className={
                style["base-ul"] + " " + (className ? style["show"] : " ")
              }
            >
              <li onClick={() => setSelectedLieu("East Blue")}>East Blue</li>
              <li onClick={() => setSelectedLieu("West Blue")}>West Blue</li>
              <li onClick={() => setSelectedLieu("North Blue")}>North Blue</li>
              <li onClick={() => setSelectedLieu("South Blue")}>South Blue</li>
              <li onClick={() => setSelectedLieu("Red Line")}>Red Line</li>
              <li onClick={() => setSelectedLieu("Calm Belt")}>Calm Belt</li>
              <li onClick={() => setSelectedLieu("Paradis")}>Paradis</li>
              <li onClick={() => setSelectedLieu("Nouveau Monde")}>
                Nouveau Monde
              </li>
            </ul>
          </div>
        )}
        {/*TODO: faire un composant avec ENUM pour la liste des régions*/}
        {filter === "regions" && (
          <div className={style["selected-item"]}>
            <ul
              className={
                style["base-ul"] + " " + (className ? style["show"] : " ")
              }
            >
              <li>Île de Dawn</li>
              <li>Archipel des Gekko</li>
              <li>Archipel de Konomi</li>
              <li>Grand Line</li>
            </ul>
          </div>
        )}
      </div>
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

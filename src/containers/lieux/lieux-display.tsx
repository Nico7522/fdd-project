import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import "../../App.css";

import Lieu from "../../components/lieu/lieu";
import { usefetchLieu } from "../../hooks/lieu";
import { LieuResponse } from "../../types/lieu";
import { Dark } from "../../App";
import SearchBar from "../../components/searchbar/searchbar";
import GeneralFilter from "../../components/filter-form-lieu/general-filter";
import OceanFilter from "../../components/filter-form-lieu/ocean-filter";
import RegionFilter from "../../components/filter-form-lieu/region-filter";
export default function Lieux() {
  const { data, loading } = usefetchLieu();
  const [filteredData, setFilteredData] = useState<LieuResponse[]>([]);
  const [page, setPage] = useState<number>(12);
  const [value, setValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [className, setClassName] = useState<boolean>(false);
  const [selectedLieu, setSelectedLieu] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState(true);
  const dark = useContext(Dark);

  useEffect(() => {
    if (filter !== "all") {
      setClassName(true);
    } else {
      if (data) {
        const filtered = data?.filter((lieu: LieuResponse) => {
          return lieu.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
      }
    }

    return () => {
      setClassName(false);
      setPage(12);
      // setSelectedLieu("");
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
          return lieu.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
      } else if (filter === "regions") {
        const filteredLieu = data.filter((lieu: LieuResponse) => {
          return lieu.region_name
            .toLowerCase()
            .includes(selectedLieu.toLowerCase());
        });
        const filtered = filteredLieu.filter((lieu: LieuResponse) => {
          return lieu.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
      } else {
        const filtered = data.filter((lieu: LieuResponse) => {
          return lieu.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
      }
    }
  }, [value, data, page, selectedLieu]);

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
        <GeneralFilter
          setFilter={setFilter}
          show={show}
          setShow={setShow}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {filter === "oceans" && show && (
          <OceanFilter
            className={className}
            setSelectedLieu={setSelectedLieu}
            setShow={setShow}
            setIsOpen={setIsOpen}
          />
        )}
        {filter === "regions" && show && (
          <RegionFilter
            className={className}
            show={show}
            setSelectedLieu={setSelectedLieu}
            setFilter={setFilter}
            setShow={setShow}
            setIsOpen={setIsOpen}
          />
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

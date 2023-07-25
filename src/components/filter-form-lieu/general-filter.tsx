import {
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import style from "./style.module.css";
import { Dark } from "../../App";
import { SlidersHorizontal } from "lucide-react";

type PropsGereralFilter = {
  setFilter: Dispatch<SetStateAction<string>>;
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function GeneralFilter({
  setFilter,
  setShow,
  show,
  isOpen,
  setIsOpen,
}: PropsGereralFilter) {
  const dark = useContext(Dark);

  const handleChange = (value: string) => {
    setShow(true);
    setFilter(value);
    if (value === "all") {
      setIsOpen(false)
    }
  };
  const toogleFilter = () => {
    setIsOpen(!isOpen);
    if (show) {
      setShow(false);
    }
  };
  return (
    <div
      className={style["select-dropdown"] + " " + (dark ? style["dark"] : "")}
    >
      <div className={style["select-container"]}>
        <h3 className={style["title-select"]} onClick={toogleFilter}>
          Select
          <span className={style["arrow"]}>
            <SlidersHorizontal size={16} strokeWidth={2} />
          </span>
        </h3>
        {isOpen && (
          <div className={style["liste-select"]}>
            <p onClick={() => handleChange("all")}>All</p>
            <p onClick={() => handleChange("oceans")}>Océans</p>
            <p onClick={() => handleChange("regions")}>régions</p>
          </div>
        )}
      </div>
    </div>
  );
}

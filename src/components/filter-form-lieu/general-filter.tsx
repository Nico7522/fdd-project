import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import style from "./style.module.css";
import { Dark } from "../../App";
import { SlidersHorizontal } from "lucide-react";

type PropsGereralFilter = {
  setFilter: Dispatch<SetStateAction<string>>;
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  handleOpenedFilter: () => boolean;
};
export default function GeneralFilter({
  setFilter,
  setShow,
  show,
  handleOpenedFilter,
}: PropsGereralFilter) {
  const dark = useContext(Dark);
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  if (!show) {
    setIsOpen(false)
    
  }
}, [handleOpenedFilter])

  const handleChange = (e: any, value: string) => {
    const selectedValue = e.target.innerHTML;
    setShow(true);
    setFilter(value);
  };

  return (
    <div
      className={style["select-dropdown"] + " " + (dark ? style["dark"] : "")}
    >
      <div className={style["select-container"]}>
        <h3
          className={style["title-select"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          Select
          <span className={style["arrow"]}>
            <SlidersHorizontal size={16} strokeWidth={2} />
          </span>
        </h3>
        {isOpen && (
          <div className={style["liste-select"]}>
            <p onClick={(e) => handleChange(e, "all")}>All</p>
            <p onClick={(e) => handleChange(e, "oceans")}>Océans</p>
            <p onClick={(e) => handleChange(e, "regions")}>régions</p>
          </div>
        )}
      </div>
    </div>
  );
}

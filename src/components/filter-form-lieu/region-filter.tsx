import { Dispatch, MouseEvent, SetStateAction} from "react";
import style from "./style.module.css";
type PropsReginFilter = {
  className: boolean;
  setSelectedLieu: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<string>>;
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  handleOpenedFilter: () => boolean

};
export default function RegionFilter({
  className,
  setSelectedLieu,
  setShow,
  handleOpenedFilter
}: PropsReginFilter) {
  const handleLieu = (e: MouseEvent) => {
    const value = e.target as HTMLLIElement;
    setSelectedLieu(value.innerHTML);
    setShow(false);
    handleOpenedFilter()
  
  };
  return (
    <div className={style["selected-item"]}>
      <ul
        className={style["base-ul"] + " " + (className ? style["show"] : " ")}
      >
        <li onClick={(e) => handleLieu(e)}>Île de Dawn</li>
        <li onClick={(e) => handleLieu(e)}>Archipel des Gekko</li>
        <li onClick={(e) => handleLieu(e)}>Archipel de Konomi</li>
        <li onClick={(e) => handleLieu(e)}>Grand Line</li>
      </ul>
    </div>
  );
}
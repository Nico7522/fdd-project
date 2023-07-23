import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import style from "./style.module.css";
import { Dark } from "../../App";
type PropsGereralFilter = {
  setFilter: Dispatch<SetStateAction<string>>;
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
};
export default function GeneralFilter({
  setFilter,
  setShow,
  show,
}: PropsGereralFilter) {
  const dark = useContext(Dark);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: any, value: string) => {
    const selectedValue = e.target.innerHTML;
    console.log(selectedValue);
    
    setShow(true);
    setFilter(value);
  };

  return (
    <div
      className={style["select-dropdown"] + " " + (dark ? style["dark"] : "")}
    >
      {/* <select onChange={(e) => handleChange(e)}>
        <option value="all">All</option>
        <option value="oceans">Océans</option>
        <option value="regions">Régions</option>
      </select> */}

      <h3 onClick={() => setIsOpen(!isOpen)}>Select</h3>
      {isOpen && (
        <>
          <p onClick={(e) => handleChange(e, 'all')}>All</p>
          <p onClick={(e) => handleChange(e, 'oceans')}>Océans</p>
          <p onClick={(e) => handleChange(e, 'regions')}>régions</p>
        </>
      )}
    </div>
  );
}

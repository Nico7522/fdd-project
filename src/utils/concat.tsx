// import { useEffect, useState } from "react";
// import { useFetchSabre } from "../hooks/sabre";
// import sabreDetails from "./sabre-image.json";
// import { SabreResponse } from "../types/sabre";
import { useState } from "react";
import style from "./style.module.css";
export default function Test() {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [move, setMove] = useState(false);

  const movFirstDiv = () => {
    return new Promise<void>((resolve, reject) => {
      setPage1(false);
      setTimeout(() => {
        setMove(false);
        setPage2(true);
        resolve();
      }, 2000);
    });
  };

  const divMoving = async () => {
    await movFirstDiv();
    setTimeout(() => {
      console.log("dsdd");

      setMove(true);
    }, 50);
  };
  return (
    <div className={style["div"]}>
      {page2 === false && (
        <div
          className={
            style["divContainer"] + " " + (!page1 ? style["move"] : "")
          }
        >
          <p>sqsqssqs</p>
          <p>sqsqssqs</p>
          <p>sqsqssqs</p>
        </div>
      )}
      {page2 === true && (
        <div
          className={
            style["divContainer2"] + " " + (move ? style["move-come"] : "")
          }
        >
          <p>sqsqssqs</p>
          <p>sqsqssqs</p>
          <p>sqsqssqs</p>
        </div>
      )}

      <button onClick={() => divMoving()}>move</button>
    </div>
  );
}

// useEffect(() => {
//     let temp: SabreResponse[] = [];

//     if (data) {
//       for (let i = 0; i < data.length; i++) {
//         temp.push(Object.assign(data[i], sabreDetails.sabreImage[i]));
//       }
//       setAllData(temp);
//       const filtered = allData.filter((sabre: SabreResponse) => {
//         return sabre.french_name.toLowerCase().includes(value.toLowerCase());
//       });
//       setFilteredData(filtered);
//     }
//   }, [value, data, page]);

// useEffect(() => {
//     let temp: SabreResponse[] = [];
//     if (data) {
//       for (let i = 0; i < data.length; i++) {
//         temp.push(Object.assign(data[i], sabreDetails.sabreImage[i]));
//       }
//       setAllData(temp);
//     }

//   }, [data]);

//   useEffect(() => {
//     console.log('coucou');
//     if (data) {
//       const filtered = data.filter((sabre: SabreResponse) => {
//         return sabre.french_name.toLowerCase().includes(value.toLowerCase());
//       });
//       setFilteredData(filtered);
//     }
//   }, [value, page]);

//   if (loading) {
//     return <div className="loader"></div>;
//   }
//   const [allData, setAllData] = useState<SabreResponse[]>([]);
//   const [dataConcat, setDataConcat] = useState<SabreResponse[]>([]);
//   const { data } = useFetchSabre();

//   useEffect(() => {
//     let temp: SabreResponse[] = [];
//     if (data) {
//       for (let i = 0; i < data.length; i++) {
//         temp.push(Object.assign(data[i], sabreDetails.sabreImage[i]));
//       }
//       setAllData(temp);
//     }

// }, [data]);

//   return (
//     <div>
//       <h1>TEST</h1>
//     </div>
//   );

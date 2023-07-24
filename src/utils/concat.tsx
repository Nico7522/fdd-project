// import { useEffect, useState } from "react";
// import { useFetchSabre } from "../hooks/sabre";
// import sabreDetails from "./sabre-image.json";
// import { SabreResponse } from "../types/sabre";
import { useState } from "react";
import style from "./style.module.css";
import "../App.css";

export default function Test() {
  const [page, setPage] = useState<string>("page1");
  const [onMove, setOnMove] = useState<boolean>(false);
  const [loading, setLoading] = useState<string>('')
  console.log(page);
  

  const moveFirstDiv = () => {
    return new Promise<void>((resolve) => {
      setOnMove(true);
      setTimeout(() => {
        setOnMove(false);
        setPage('page2')
        resolve();
      }, 500);
    });
  };

  const divMoving = async () => {
    await moveFirstDiv();
    setLoading('loading')
    
    setTimeout(() => {
      setLoading('loaded')
    }, 700);
    setTimeout(() => {
     
      setOnMove(true);
    }, 800);
  };
  return (
    <div className={style["div"]}>
      {loading === "loading" && <div className="loader"></div> }
      {page === "page1" && (
        <div
          className={
            style["divContainer"] + " " + (onMove === true ? style["move"] : "")
          }
        >
          <p>sqsqssqs</p>
          <p>sqsqssqs</p>
          <p>sqsqssqs</p>
        </div>
      )}
      {page === "page2" && loading !== "loading" && (
        <div
          className={
            style["divContainer2"] + " " + (onMove ? style["move-come"] : "")
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

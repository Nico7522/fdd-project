import { useEffect, useState } from "react";
import { useFetchSabre } from "../hooks/sabre";
import sabreDetails from "./sabre-image.json";
import { SabreResponse } from "../types/sabre";

export default function Test() {
  const [allData, setAllData] = useState<SabreResponse[]>([]);
  const [dataConcat, setDataConcat] = useState<SabreResponse[]>([]);
  const { data } = useFetchSabre();

  useEffect(() => {
    let temp: SabreResponse[] = [];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        temp.push(Object.assign(data[i], sabreDetails.sabreImage[i]));
      }
      setAllData(temp);
    }

    
}, [data]);

  return (
    <div>
      <h1>TEST</h1>
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
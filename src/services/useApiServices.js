import { useState, useEffect } from "react";

export function useApiServices(clicked) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const adviceResponse = await fetch("https://api.adviceslip.com/advice");
        const data = await adviceResponse.json();
        setData(data);
      } catch (e) {
        console.log("Error al obtener los datos: ", e);
      }
    }
    fetchData();
  }, [clicked]);

  return { data };
}

import { useEffect, useState } from "react";

function useFetch(API) {
    const [data, setData] = useState();

   
  useEffect(() => {
    getListing();
  }, [API]);
  const getListing = async () => {
    const resposne = await fetch(API);
    const res = await resposne.json();
    setData(res.products);
  };
  
    return data;

}

export default useFetch
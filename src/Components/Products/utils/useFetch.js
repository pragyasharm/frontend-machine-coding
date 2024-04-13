import { useEffect, useState } from "react";

function useFetch(API) {
    const [data, setData] = useState();
    const [category, setCategory] = useState([]);

   
  useEffect(() => {
    getListing();
  }, [API]);
  const getListing = async () => {
    const resposne = await fetch(API);
    const res = await resposne.json();
    const product = res.products
    const allCategory = product.map((p)=> p.category)
    const distinctCategories = [...new Set(allCategory)];
    setData(product);
    setCategory(distinctCategories)

  };
  
    return {data, category};

}

export default useFetch
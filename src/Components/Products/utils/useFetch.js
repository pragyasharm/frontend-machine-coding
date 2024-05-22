import { useEffect, useState } from "react";
import axios from 'axios';

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
    
    try {
      const res1 = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(res1.data)
    } catch (err) {
       console.log(err.message)
    }

    setData(product);
    setCategory(distinctCategories)

  };
  
    return {data, category};

}

export default useFetch
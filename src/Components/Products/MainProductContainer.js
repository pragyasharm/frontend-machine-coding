import React, { useEffect, useState } from "react";
import { API, ItemsPerPage } from "./utils/CONSTANTS";
import useFetch from "./utils/useFetch";
import ProductCard from "./ProductCard";

const MainProductContainer = () => {
    const {data, category} = useFetch(API);
    console.log(data)
  return (
    <div>
        {/** list of category */}
        <div>
            <h1 className="text-xl">Category</h1>
            <ul className="flex">
                {category &&  category.map((c)=> <li key={c} className="p-2 m-2 border border-black rounded-lg">{c}</li>)}
            </ul>
        </div>


        {/** display product card */}
        
        <div className="flex overflow-hidden">
          {data && data.map((product)=> {
              return <ProductCard key={product.id} product={product}/>
          })}
        </div>

        
    </div>
  )
}

export default MainProductContainer
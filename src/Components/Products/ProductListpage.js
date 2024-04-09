/** @format */

import React, { useEffect, useState } from "react";
import { API, ItemsPerPage } from "./utils/CONSTANTS";
import Listing from "./Listing";

const ProductListpage = () => {
  const [productMasterList, setProductMasterList] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const StartIndex = (currentPage - 1) * ItemsPerPage;
  const EndIndex = StartIndex + ItemsPerPage;

  const productList = products && products.slice(StartIndex, EndIndex);

  const getListing = async () => {
    const resposne = await fetch(API);
    const data = await resposne.json();
    setProductMasterList(data.products);
    setProducts(data.products);
  };
  useEffect(() => {
    getListing();
  }, []);

  const handleNext = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((currentPage) => currentPage - 1);
  };
  const handleSort = (e) => {
    const sortCritria = e.target.id;
    let sortedArray;
    if (sortCritria === "price" || sortCritria === "id") {
      sortedArray = [...products].sort(
        (a, b) => a[sortCritria] - b[sortCritria]
      );
    } else {
      sortedArray = [...products].sort((a, b) =>
        a[sortCritria].localeCompare(b[sortCritria])
      );
    }
    console.log("sorted array");
    setCurrentPage(1);
    setProducts(sortedArray);
  };
  const handleSearch = () => {
    console.log(searchText);
    const filteredProducts = productMasterList.filter((res) =>
      res.title.toLowerCase().includes(searchText)
    );
    setCurrentPage(1);
    setProducts(filteredProducts);
  };

  return (
    <div className="">
      <h1 className="text-2xl">list of Products</h1>
      <input
        type='text'
        placeholder='search item'
        className="border border-gray-600 p-2 m-2 rounded-md"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())}
      />
      <button className="rounded-md p-2 m-2 text-l bg-gray-700 font-semibold text-white" onClick={handleSearch}>Search</button>
      <table className="border border-gray-600 ">
        <thead className="border border-gray-600" onClick={handleSort}>
          <th className="border border-gray-600 cursor-pointer" id='id'>ID</th>
          <th className="border border-gray-600 cursor-pointer" id='title'>Title</th>
          <th className="border border-gray-600 cursor-pointer" id='price'>Price</th>
          <th className="border border-gray-600 cursor-pointer" id='brand'>Brand</th>
          <th className="border border-gray-600 cursor-pointer" id='category'>Category</th>
        </thead>
        <tbody className="border border-gray-600">
          {productList &&
            productList.map((product) => <Listing product={product} key={product.id}/>)}
        </tbody>
      </table>
      <button className="rounded-lg p-2 m-2 text-l bg-blue-400 font-semibold" onClick={handlePrevious}>Previous</button>
      <button className="rounded-lg p-2 m-2 text-l bg-blue-400 font-semibold" onClick={handleNext}>Next</button>
    </div>
  );
};

export default ProductListpage;
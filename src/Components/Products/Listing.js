/** @format */

import React from "react";

const Listing = ({ product }) => {
  const { id, title, price, brand, category } = product;
  return (
    <>
      <tr className="border border-gray-600" key={id}>
        <td className="border border-gray-600">{id}</td>
        <td className="border border-gray-600">{title}</td>
        <td className="border border-gray-600">{price}</td>
        <td className="border border-gray-600">{brand}</td>
        <td className="border border-gray-600">{category}</td>
      </tr>
    </>
  );
};

export default Listing;

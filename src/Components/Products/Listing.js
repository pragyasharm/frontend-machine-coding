import React from 'react'

const Listing = ({productList}) => {
  console.log("final rendering products")
  console.log(productList);
  return (
    <>
    {productList.map((product)=> { 
     return <tr key={product.id}>
       <td>{product.id}</td>
       <td>{product.title}</td>
       <td>{product.price}</td>
       <td>{product.brand}</td>
       <td>{product.category}</td>
     </tr>
      
    })}
    </>
  )
}

export default Listing
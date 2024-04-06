import React from 'react'

const Listing = ({productMasterList}) => {
    console.log(productMasterList);

  return (
    <>
    {productMasterList.map((product)=> { 
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
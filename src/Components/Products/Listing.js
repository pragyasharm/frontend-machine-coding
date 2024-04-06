import React from 'react'

const Listing = ({products}) => {

  return (
    <>
    {products.map((product)=> { 
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
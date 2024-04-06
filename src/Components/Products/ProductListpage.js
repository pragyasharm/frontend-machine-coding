import React, { useEffect, useState } from 'react'
import { API } from './utils/CONSTANTS'
import Listing from './Listing';

const ProductListpage = () => {
    const [productMasterList, setProductMasterList] = useState([]);
    
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getListing();

    }, [])

    const getListing = async () => {
        const resposne = await fetch(API);
        const data = await resposne.json()
       // console.log(data.products);
        setProductMasterList(data.products);
    }

    return (
        <div>
            <div>This is the list of Products</div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th>Category</th>
                </thead>
                <tbody>
                {productMasterList && <Listing productMasterList={productMasterList} /> }
                </tbody>
            </table>
        </div>
    )
}

export default ProductListpage
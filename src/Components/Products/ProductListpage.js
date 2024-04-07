import React, { useEffect, useState } from 'react'
import { API, ItemsPerPage } from './utils/CONSTANTS'
import Listing from './Listing';

const ProductListpage = () => {
    const [productMasterList, setProductMasterList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    console.log("inside component");
    const StartIndex = (currentPage - 1)*ItemsPerPage
    const EndIndex = StartIndex + ItemsPerPage
    const productList = productMasterList && productMasterList.slice(StartIndex, EndIndex)
    useEffect(() => {
        getListing();

    }, [])

    const getListing = async () => {
        const resposne = await fetch(API);
        const data = await resposne.json()
        setProductMasterList(data.products);
    }

    const handleNext = () => {
        setCurrentPage((currentPage)=> currentPage+1)

    }

    const handlePrevious = () => {
        if(currentPage>1) setCurrentPage((currentPage)=> currentPage-1)

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
                
                {productList && <Listing productList={productList} /> }
                </tbody>
            </table>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ProductListpage
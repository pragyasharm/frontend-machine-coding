import React, { useEffect, useState } from 'react'
import { API, ItemsPerPage } from './utils/CONSTANTS'
import Listing from './Listing';

const ProductListpage = () => {
    const [productMasterList, setProductMasterList] = useState([]);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("")

    const StartIndex = (currentPage - 1) * ItemsPerPage
    const EndIndex = StartIndex + ItemsPerPage

    //console.log("inside component before slice");
    console.log((products));
    const productList = products && products.slice(StartIndex, EndIndex)
    console.log((productList));
    useEffect(() => {
        getListing();

    }, [])

    const getListing = async () => {
        const resposne = await fetch(API);
        const data = await resposne.json()
        setProductMasterList(data.products);
        setProducts(data.products);
    }

    const handleNext = () => {
        setCurrentPage((currentPage) => currentPage + 1)

    }

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage((currentPage) => currentPage - 1)

    }
    const handleSort = (e) => {
        const sortCritria = e.target.id
        let sortedArray
        if (sortCritria === "number" || sortCritria === "id") {
            sortedArray = products.sort((a, b) => a[sortCritria] - b[sortCritria]);
        } else {
            sortedArray = products.sort((a, b) => a[sortCritria].localeCompare(b[sortCritria]));
        }
        setProducts(sortedArray)
    }
    const handleSearch = () => {
        console.log(searchText);
        const filteredProducts = productMasterList.filter((res) => res.title.toLowerCase().includes(searchText));
        setCurrentPage(1)
        setProducts(filteredProducts);
    }

    return (
        <div>
            <div>This is the list of Products</div>
            <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())} />
            <button onClick={handleSearch}>Search</button>
            <table>
                <thead onClick={handleSort}>
                    <th id='id'>ID</th>
                    <th id='title'>Title</th>
                    <th id='price'>Price</th>
                    <th id='brand'>Brand</th>
                    <th id='category'>Category</th>
                </thead>
                <tbody>
                    {/*console.log("rendeing the component again") */}
                    {productList && <Listing productList={productList} />}
                </tbody>
            </table>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ProductListpage
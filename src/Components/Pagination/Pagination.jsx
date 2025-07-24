import { useState, useEffect } from "react";
import "./styles.css";
import ProductCard from "./ProductCard.js";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const totalPage = Math.ceil(products.length / PAGE_SIZE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=200");
        const json = await res.json();
        setProducts(json.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayed = products.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPage - 1) setCurrentPage((prev) => prev + 1);
  };

  const handlePageNoClick = (i) => setCurrentPage(i);

  if (loading) return <p>Loading...</p>;
  if (products.length === 0) return <p>No products found</p>;

  return (
    <div>
      <h1>Pagination</h1>
      <div>
        <button id="previous" onClick={handlePrev} disabled={currentPage === 0}>
          <FiChevronsLeft />
        </button>

        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index}
            className={index === currentPage ? "active" : ""}
            onClick={() => handlePageNoClick(index)}
          >
            {index + 1}
          </button>
        ))}

        <button
          id="next"
          onClick={handleNext}
          disabled={currentPage === totalPage - 1}
        >
          <FiChevronsRight />
        </button>
      </div>

      <div className="product-list">
        {displayed.map((item) => (
          <ProductCard
            key={item.id}
            image={item.images[0]}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;

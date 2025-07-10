import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(null);
  const [buttons, setButtons] = useState([]);

  const dataPerPage = 10;

  useEffect(() => {
    let array = [];
    const totalNumber = 67;
    for (let i = 0; i < totalNumber; i++) {
      array.push(`Item no ${i + 1}`);
    }
    const pageCalculate = Math.ceil(totalNumber / dataPerPage);
    setTotalPage(pageCalculate);
    let buttonList = [];
    for (let i = 0; i < pageCalculate; i++) {
      buttonList.push(i);
    }
    setButtons(buttonList);
    const tempArray = array.slice(0, dataPerPage);
    setCurrentPageData(tempArray);
    setData(array);
  }, []);

  const handleClick = (index) => {
    let tempArray = data.slice(index * dataPerPage, index * dataPerPage + 10);
    console.log(tempArray);

    setCurrentPage(index);
    setCurrentPageData(tempArray);
  };

  return (
    <>
      <div>
        <h2>Pagination</h2>
        {currentPageData &&
          currentPageData.map((item, index) => <div key={index}>{item}</div>)}
      </div>
      {buttons &&
        buttons.map((item, index) => (
          <button
            key={index}
            className={`p-2 m-1 border border-black ${
              index == currentPage ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            Page {item + 1}
          </button>
        ))}
    </>
  );
};

export default Pagination;

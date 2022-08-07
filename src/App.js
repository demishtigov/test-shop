import "./App.css";
import Items from "./components/items/Items";
import Filter from "./components/filters/Filter";
import dataList from "./data";
import { useState, useEffect } from "react";

const App = () => {
  // Slider
  const [selectedPrice, setSelectedPrice] = useState([0, 10000]);
  
  //Company
  const [company, setCompany] = useState([
    { id: 1, checked: false, label: "Mindray" },
    { id: 2, checked: false, label: "Philips" },
    { id: 3, checked: false, label: "Samsung" },
  ]);
  
  // Data
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);

  //Handlers
  const handleChangeChecked = (id) => {
    const companyList = company;
    const changeCompany = companyList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCompany(changeCompany);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Company Filter
    const companyChecked = company
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (companyChecked.length) {
      updatedList = updatedList.filter((item) =>
        companyChecked.includes(item.company)
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };
 
  useEffect(() => {
    applyFilters();
  }, [company, selectedPrice]);

  return (
    <>
      <div className="container">
        <aside className="aside__section">
          <Filter
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            company={company}
            changeChecked={handleChangeChecked}
          />
        </aside>
        <main className="main__section">
          {resultsFound ? <Items list={list} /> : null}
        </main>
      </div>
    </>
  );
};

export default App;

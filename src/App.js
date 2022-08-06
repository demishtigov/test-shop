import "./App.css";
import Items from "./components/items/Items";
import Filter from "./components/filters/Filter";
import dataList from './data'
import {useState, useEffect} from 'react'

function App() {

  const [selectedPrice, setSelectedPrice] = useState([10000, 2000000])
  const [checkedPrice, setCheckedPrice] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
  ])
  
  //console.log(checkedPrice)
  
  const [list, setList] = useState(dataList)
  const [resultsFound, setResultsFound] = useState(true);
  
  const handleChangeChecked = (id) => {
    const checkedPriceList = checkedPrice;
    const changeCheckedPrice = checkedPriceList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCheckedPrice(changeCheckedPrice);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // console.log(updatedList)

    // CheckedPrice Filter
    const pricesChecked = checkedPrice
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

      
    
if (pricesChecked.length) {
      updatedList = updatedList.filter((item) =>
      pricesChecked.includes(item.cuisine)
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
  }, [ checkedPrice, selectedPrice]);
  
  return (
    <>
      <div className="container">
        <aside className="aside__section">
          <Filter 
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            checkedPrice={checkedPrice}
            changeChecked={handleChangeChecked}
          />
        </aside>
        <main className="main__section">
          {resultsFound ? <Items list={list} /> : null }
          
        </main>
      </div>
    </>
  );
}

export default App;

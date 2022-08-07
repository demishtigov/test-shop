import React, { useState } from "react";
import CheckboxProton from "./CheckboxProton";
import SliderProton from "./SliderProton";
import "./filters.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@material-ui/core";
// import ExpandMoreIcon from '@material-ui/icons'

const Filter = ({ selectedPrice, changePrice, company, changeChecked }) => {

  const [isActive, setIsActive] = useState(false)
  const [isActive2, setIsActive2] = useState(false)
  console.log(isActive)
  
  return (
    <>
      <div className="input-group">
        <div className="label-title"onClick={() => setIsActive(!isActive)}>
          <p className="label" >Бренд</p>
          <div>{isActive ? <ExpandLessIcon /> : <ExpandMoreIcon/>} 
            
          </div>
          
        </div>
        {isActive && company.map((item) => (
          <CheckboxProton
            key={item.id}
            item={item}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      <div className="input-group" >
        <div className="label-title" onClick={() => setIsActive2(!isActive2)}>
          <p className="label" >Цена</p>
          <p>{isActive2 ? <ExpandLessIcon /> : <ExpandMoreIcon/>} </p>
        </div>
        {isActive2 && <SliderProton value={selectedPrice} changePrice={changePrice} />}
      </div>
    </>
  );
};

export default Filter;

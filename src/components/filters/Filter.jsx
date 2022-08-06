import React from 'react'
import CheckboxProton from './CheckboxProton'
import SliderProton from './SliderProton'

const Filter = ({selectedPrice, changePrice, checkedPrice, changeChecked}) => {
  return <>
    <div className='input-group'>
      <p className='label'>Cuisine</p>
      {checkedPrice.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
  </>
    
  
}

export default Filter
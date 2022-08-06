import React from 'react';


const ListItem = ({
  item: { coverSrc, title, price, priceStart, pricePerMonth, deliveryFee, serviceTime, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>{priceStart} ${price} {pricePerMonth}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;

import React from "react";

const ListItem = ({
  item: { coverSrc, title, price, priceStart, pricePerMonth, priceUnknown, class1, type, view },
}) => (
  <div className="listItem-wrap">
    <img src={coverSrc} alt="" />
    <header>
      <h4 className="title">{title}</h4>
      <br />
      {typeof price === "number" ? (
        <p>
          <b>
            {priceStart} ${price} {pricePerMonth}
          </b>
        </p>
      ) : (
        <p> <b>{priceUnknown} </b></p>
      )}
    </header>
    <footer>
      <a className="details" hrefclass="product-item__detail">
        Подробнее
      </a>
      <button class="btn">
        <span class="btn-icon">
          <img src="../img/cart-icon.svg" alt="" />
        </span>
        <span class="btn-text">Получить КП</span>
      </button>
    </footer>
      <h4 className="display-none">{class1}</h4>
      <h4 className="display-none">{type}</h4>
      <h4 className="display-none">{view}</h4>
  </div>
);

export default ListItem;

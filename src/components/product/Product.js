import React from "react";
import "./Product.css";
import { useStateValue } from "../state-provider/StateProvider";

function Product(props) {
  const { title, price, id, image, rating } = props;

  //basket = current state
  //dispatch = next state after we perform an action
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //Add item to basket
    dispatch({
      //this is the action.type du reducer.js
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {/* create an array, llenala con el valor de rating, y recorrela */}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <span role="img" aria-label="">
                  ⭐
                </span>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

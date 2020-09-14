export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//Way of saying
//action = addBasket for example
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      //action.item est l'item qu'on choppe en faisant une action (regarder la console en cliquant sur "add to basket")
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //We clone the basket
      let newBasket = [...state.basket];
      //We check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not on your basket`
        );
      }
      return { ...state, basket: newBasket };

    default:
      //If you don't know what to do, just return the state with the data into it
      return state;
  }
};

//Allow us to use the reducer outside
export default reducer;

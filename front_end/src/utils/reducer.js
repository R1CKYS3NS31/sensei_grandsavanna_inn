export const initialState = {
  basket: [],
  user: null,
  stockProduct: [],
  order: [],
};

export const reducerAction = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_USER: "SET_USER",
  STOCK_PRODUCT: "STOCK_PRODUCT",
  ADD_TO_STOCK: "ADD_TO_STOCK",
  ADD_TO_ORDER: "ADD_TO_ORDER",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
export const getOrderTotal = (order) =>
  order?.reduce((amount, item) => item.OrderAmount + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    // case reducerAction.STOCK_PRODUCT:
    //   return { ...state, stockProduct: [...state.stockProduct, action.item] };
    case reducerAction.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };

    case reducerAction.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id} as it's not in the basket)`
        );
      }
      return { ...state, basket: newBasket };

    case reducerAction.ADD_TO_ORDER:
      return { ...state, order: [...state.order, action.item] };

    case reducerAction.EMPTY_BASKET:
      return { ...state, basket: [] };
    case reducerAction.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;

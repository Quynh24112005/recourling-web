export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  }
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  }
}

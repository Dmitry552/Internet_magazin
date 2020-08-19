export var addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj
});

export var removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id
});
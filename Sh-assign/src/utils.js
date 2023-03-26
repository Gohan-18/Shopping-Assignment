export const getSubTotal = (cartItem) => {
    return cartItem.reduce((sum, {product, quantity}) => product.price * quantity + sum, 0);
}
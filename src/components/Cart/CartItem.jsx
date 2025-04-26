import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../redux/cartSlice'

function CartItem({ item }) {
  const dispatch = useDispatch()

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value)
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }))
    }
  }

  const handleRemove = () => {
    dispatch(removeFromCart(item.id))
  }

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <div className="quantity-control">
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
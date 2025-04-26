import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../../redux/cartSlice'

function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty</div>
  }

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
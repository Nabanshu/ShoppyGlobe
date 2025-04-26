import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const cartItems = useSelector(state => state.cart.items)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="header">
      <nav>
        <Link to="/">ShoppyGlobe</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            Cart ({totalItems})
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
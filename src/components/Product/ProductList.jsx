import { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import useProducts from '../../hooks/useProducts'

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('')
  const { products, loading, error } = useProducts()

  if (loading) return <div>Loading products...</div>
  if (error) return <div>Error: {error.message}</div>

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="products">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
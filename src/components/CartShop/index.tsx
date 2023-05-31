import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { ButtonCart, CountCart } from './styled'
import { CartContext } from '../../contexts/CartContex'
import { Link } from 'react-router-dom'

export function CartShop() {
  const { cartCofees } = useContext(CartContext)
  const coffeeQuantity = cartCofees.length
  const isEmpty = coffeeQuantity > 0
  return (
    <Link to={'/checkout'}>
      <ButtonCart title="Carrinho">
        <ShoppingCart size={22} weight="fill" />
        <CountCart isEmpty={!isEmpty}>{coffeeQuantity}</CountCart>
      </ButtonCart>
    </Link>
  )
}

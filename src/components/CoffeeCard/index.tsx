import { useState, useContext } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ButtonShopCart,
  CoffeeItem,
  CoffeeItemInfo,
  CoffeeItemTag,
  FooterCoffeeItem,
  InputContainer,
  InteractionsContainer,
  ThumbContainer,
} from './styled'
import { CartContext } from '../../contexts/CartContex'

interface ICoffee {
  id: number
  thumb: string
  title: string
  description: string
  price: number
  tags: string[]
}

interface ICoffeeProps {
  coffee: ICoffee
}

export function CoffeCard({ coffee }: ICoffeeProps) {
  const { addCoffeeCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  function addOneQuantity() {
    setQuantity((value) => value + 1)
  }
  function decreasesOneQuantity() {
    setQuantity((value) => (value > 1 ? value - 1 : value))
  }
  function handleAddItemCart() {
    addCoffeeCart({
      id: coffee.id,
      thumb: coffee.thumb,
      title: coffee.title,
      price: coffee.price,
      quantity,
    })
  }
  return (
    <CoffeeItem>
      <ThumbContainer>
        <img src={coffee.thumb} alt="" />
        <div>
          {coffee.tags.map((item) => (
            <CoffeeItemTag key={item}>{item}</CoffeeItemTag>
          ))}
        </div>
      </ThumbContainer>
      <CoffeeItemInfo>
        <strong>{coffee.title}</strong>
        <span>{coffee.description}</span>
        <FooterCoffeeItem>
          <span>
            R$<strong>{coffee.price}</strong>
          </span>
          <InteractionsContainer>
            <InputContainer>
              <button onClick={decreasesOneQuantity}>
                <Minus />
              </button>
              <input disabled type="number" min={1} value={quantity} />
              <button onClick={addOneQuantity}>
                <Plus />
              </button>
            </InputContainer>
            <ButtonShopCart onClick={handleAddItemCart}>
              <ShoppingCart size={22} weight="fill" />
            </ButtonShopCart>
          </InteractionsContainer>
        </FooterCoffeeItem>
      </CoffeeItemInfo>
    </CoffeeItem>
  )
}

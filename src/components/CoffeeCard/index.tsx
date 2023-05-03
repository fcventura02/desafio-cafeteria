import { useState } from 'react'
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
  const [quantity, setQuantity] = useState(1)
  function addOneQuantity() {
    setQuantity((value) => value + 1)
  }
  function decreasesOneQuantity() {
    setQuantity((value) => (value > 1 ? value - 1 : value))
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
              <input type="number" min={1} value={quantity} />
              <button onClick={addOneQuantity}>
                <Plus />
              </button>
            </InputContainer>
            <ButtonShopCart>
              <ShoppingCart size={22} weight="fill" />
            </ButtonShopCart>
          </InteractionsContainer>
        </FooterCoffeeItem>
      </CoffeeItemInfo>
    </CoffeeItem>
  )
}

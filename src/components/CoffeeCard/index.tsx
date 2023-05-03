import { useState } from 'react'
import coffeExpresso from '../../assets/coffees/expresso.png'
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

export function CoffeCard() {
  const [quantity, setQuantity] = useState(1)
  function addOneQuantity() {
    setQuantity((value) => value + 1)
  }
  function decreasesOneQuantity() {
    setQuantity((value) => value - 1)
  }
  return (
    <CoffeeItem>
      <ThumbContainer>
        <img src={coffeExpresso} alt="" />
        <div>
          <CoffeeItemTag>Tradicional</CoffeeItemTag>
        </div>
      </ThumbContainer>
      <CoffeeItemInfo>
        <strong>Expresso Tradicional</strong>
        <span>O tradicional café feito com água quente e grãos moídos</span>
        <FooterCoffeeItem>
          <span>
            R$<strong>9,90</strong>
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

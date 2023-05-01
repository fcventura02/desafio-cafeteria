import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import {
  ActionsContainer,
  ButtonCart,
  ButtonLocation,
  HeaderContainer,
} from './styled'

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <img src={logo} alt="" />
        <ActionsContainer>
          <ButtonLocation>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </ButtonLocation>
          <ButtonCart title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </ActionsContainer>
      </HeaderContainer>
    </header>
  )
}

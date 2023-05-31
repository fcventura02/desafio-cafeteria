import { MapPin } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import { ActionsContainer, ButtonLocation, HeaderContainer } from './styled'
import { CartShop } from '../CartShop'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <ActionsContainer>
          <ButtonLocation>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </ButtonLocation>
          <CartShop />
        </ActionsContainer>
      </HeaderContainer>
    </header>
  )
}

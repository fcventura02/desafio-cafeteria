import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import banner from '../../assets/banner.png'
import {
  BannerContainer,
  CoffeesContainer,
  HomeContainer,
  IconList,
  IntroStyle,
  ListCoffee,
  ListContainer,
  TitleContainer,
} from './styled'
import { CoffeCard } from '../../components/CoffeeCard'
import { useEffect, useState } from 'react'

export function Home() {
  const [mockData, setMockData] = useState<any[]>([])
  useEffect(() => {
    fetch('src/mockdata/coffeeMock.json')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const data = res || []
        setMockData(() => [...data])
        return res
      })
  }, [])
  return (
    <>
      <IntroStyle>
        <HomeContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <BannerContainer>
            <img
              width="476px"
              src={banner}
              alt="Ilustração de um copo de café, café em grãos e em pó"
            />
          </BannerContainer>
          <ListContainer>
            <ul>
              <li>
                <IconList customColor="yellowDark">
                  <ShoppingCart size={22} weight="fill" />
                </IconList>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <IconList customColor="gray-700">
                  <Package size={22} weight="fill" />
                </IconList>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <IconList customColor="yellow">
                  <Timer size={22} weight="fill" />
                </IconList>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <IconList customColor="purple">
                  <Coffee size={22} weight="fill" />
                </IconList>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </ListContainer>
        </HomeContainer>
      </IntroStyle>
      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <ListCoffee>
          {mockData.map((item) => (
            <CoffeCard key={item.id} coffee={item} />
          ))}
        </ListCoffee>
      </CoffeesContainer>
    </>
  )
}

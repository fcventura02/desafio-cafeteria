import styled from 'styled-components'
import background from '../../assets/Background.png'

export const IntroStyle = styled.div`
  padding: 28px 0;
  background: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 1120px) {
    padding: 98px 0;
  }
`

export const HomeContainer = styled.div`
  max-width: 1120px;
  width: 92%;
  margin-inline: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 'title' 'banner' 'list';
  grid-template-columns: auto;
  @media (min-width: 1120px) {
    grid-template: 'title banner' 'list banner';
    grid-template-columns: minmax(auto, 588px) minmax(auto, 476px);
    justify-content: space-between;
  }
`

export const TitleContainer = styled.div`
  max-width: 588px;
  width: fit-content;
  grid-area: title;

  h1 {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.9rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 500px) {
    h1 {
      font-size: 3rem;
      line-height: 3.9rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
`

export const BannerContainer = styled.div`
  grid-area: banner;
  display: flex;
  img {
    max-width: 400px;
    margin: 30px auto 0;
    width: 100%;
    @media (min-width: 615px) {
      margin-top: 0;
      max-width: none;
    }
  }
`

export const ListContainer = styled.div`
  width: fit-content;
  grid-area: list;
  margin-top: 30px;
  ul {
    display: grid;
    grid-template-columns: auto;
    row-gap: 20px;
    column-gap: 40px;
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    gap: 12px;
    span {
      font-size: 0.85rem;
      line-height: 1.25rem;
    }
    @media (min-width: 500px) {
      span {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
  @media (min-width: 615px) {
    max-width: 588px;
    margin-top: 66px;
    ul {
      grid-template-columns: auto 1fr;
    }
  }
`

interface StatusProps {
  customColor: 'yellow' | 'yellowDark' | 'purple' | 'gray-700'
}

export const IconList = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 100%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.customColor]};
`

export const CoffeesContainer = styled.div`
  max-width: 1120px;
  width: 92%;
  padding: 32px 0;
  margin-inline: auto;
`

export const ListCoffee = styled.ul`
  display: flex;
  row-gap: 40px;
  column-gap: 32px;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 40px;
`

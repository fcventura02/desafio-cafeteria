import styled from 'styled-components'

export const CoffeeItem = styled.li`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 1.25rem;
  border-radius: 6px 36px;
  text-align: center;
  max-width: 256px;
`

export const ThumbContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 20px;

  img {
    width: 120px;
    height: 120px;
    margin-bottom: 12px;
  }
`

export const CoffeeItemTag = styled.span`
  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  padding: 4px 8px;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
`

export const CoffeeItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 20px;
    line-height: 26px;
    color: ${(props) => props.theme['gray-800']};
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    line-height: 18.2px;
  }
`

export const FooterCoffeeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;
`

export const InteractionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  padding: 8px 4px;
  border-radius: 6px;
  gap: 4px;
  background: ${(props) => props.theme['gray-400']};
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${(props) => props.theme.purple};
    border: 0;
    cursor: pointer;
  }

  input {
    text-align: center;
    background: transparent;
    max-width: 20px;
    border: 0;
    outline: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &:has(:focus) {
    outline: 2px solid ${(props) => props.theme.purple};
  }
`

export const ButtonShopCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.purpleDark};
  color: ${(props) => props.theme.white};
  margin-left: 4px;
  padding: 8px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  &:focus {
    outline: 2px solid ${(props) => props.theme.purple};
  }
`

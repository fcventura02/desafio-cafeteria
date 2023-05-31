import styled from 'styled-components'

export const ButtonCart = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  padding: 8px;
  border-radius: 6px;
  border: 0;
  outline: none;
  :focus {
    outline: 2px solid ${(props) => props.theme.yellowDark};
  }
  :hover {
    cursor: pointer;
    outline: 2px solid ${(props) => props.theme.yellowDark};
  }
`

interface ICartShop {
  isEmpty: boolean
}

export const CountCart = styled.span<ICartShop>`
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 100%;

  display: ${(props) => (props.isEmpty ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  line-height: 0px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellowDark};

  position: absolute;
  translate: 50%;
  top: -25%;
  left: 50%;
`

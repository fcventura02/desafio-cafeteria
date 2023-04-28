import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  body{
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-700']};
  }

  body, input, button{
    /* font-family: 'Baloo 2', cursive; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

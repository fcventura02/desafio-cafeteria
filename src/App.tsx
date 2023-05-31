import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './rotas'
import { CartContextProvider } from './contexts/CartContex'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Rotas />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App

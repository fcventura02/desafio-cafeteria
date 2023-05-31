import { createContext, useState } from 'react'

interface ICoffeeCart {
  id: number
  thumb: string
  title: string
  price: number
  quantity: number
}

interface ICoffeeCartContext {
  cartCofees: ICoffeeCart[]
  addCoffeeCart: (coffe: ICoffeeCart) => void
  /* addOneQuantity: (id: number) => void
  decreasesOneQuantity: (id: number) => void
  removeItem: (id: number) => void */
}
export const CartContext = createContext({} as ICoffeeCartContext)

export function CartContextProvider(props: any) {
  const [cartCofees, setCartCofees] = useState<ICoffeeCart[]>([])
  function addCoffeeCart(coffe: ICoffeeCart) {
    setCartCofees((item) => {
      const newItem = [...item, coffe]
      return newItem
    })
  }
  return (
    <CartContext.Provider value={{ cartCofees, addCoffeeCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

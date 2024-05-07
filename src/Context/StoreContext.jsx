import React, { useEffect } from 'react'
import {createContext,useState} from 'react'
export const StoreContext = createContext(null);
const StoreContexts = (props) => {

  const [items, setItems] = useState({});
  const cartItem = {
    setItems,
    items
  }

  useEffect(() => {
    console.log(items)
  })
  return (
    <StoreContext.Provider value={cartItem}>
{props.children}
    </StoreContext.Provider>
  )
}

export default StoreContexts
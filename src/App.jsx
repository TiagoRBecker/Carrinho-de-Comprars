import React,{useState} from "react"
import Nav from "./components/Nav/NavItem"
import Cursos from "./components/Cursos/index"
import CardItem from "./components/cartItemRemove/Item"
function App() {
  const [cart,setCart]= useState([])
  function handlleAddItemToCart(img,title,price){
    const itemObject = {img,title,price}
    setCart([...cart, itemObject])
    
  }
  function handleRemove (itemIndex){
    const filterCard = cart.filter(cartItem => cart.indexOf(cartItem) !== itemIndex)
    setCart(filterCard)
  }
  function clean (){
    setCart([])

  }
  return (
    <div className="App">
     <Nav 
     cart={cart}
     clean={clean}
     />
     <Cursos onclick={handlleAddItemToCart}/>
     <CardItem 
     cart={cart}
     handleRemove={handleRemove}
     />

    </div>
  )
}

export default App

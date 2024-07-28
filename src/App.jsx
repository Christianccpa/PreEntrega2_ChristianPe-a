import { useState, useEffect } from "react"
import Guitars from "./components/Guitars"
import Header from "./components/header"
import { db } from "./data/db"
function App() {
  
const [data, setData] = useState (db)
const [cart, setCart] = useState ([])

function addToCart (item) {
  
  const itemExist = cart.findIndex (guitars => guitars.id === item.id)
  if(itemExist >= 0) { //existe en el carrito
    const updatedCart = [...cart]
    updatedCart[itemExist].quantity++
    setCart(updatedCart)
  } else {
    item.quantity = 1
    setCart([...cart, item])
  }

}

  return (
    <>
   
   
    <Header 
    cart={cart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitars)=> (
                 <Guitars
                 key={guitars.id} 
                 guitars={guitars}
                 setCart={setCart}
                 addToCart={addToCart}
                 />
                 
          )
            )}
         
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">ChrisPena Guitars - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App

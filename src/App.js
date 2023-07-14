import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./views/Carrito";
import Pizza from "./views/Pizza";
import Home from "./views/Home";
import Contexto from "./context/Contexto";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from "./components/BarraNav";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

const getData = async() => {
  const res = await fetch('http://localhost:3000/pizzas.json')
  const data = await res.json();
  setPizzas([...data]);   
}

const agregarAlCarrito = (id) => {
  const index = carrito.findIndex((p) => p.id === id );
  if (index >= 0){
    carrito[index].cantidad++;
    setCarrito([...carrito]);
  }else {
    carrito.push({id:id, cantidad:1 })
  }
}

useEffect(() => {
  getData();
}, [])
  return (
    <div className="App">
      <Contexto.Provider value={{pizzas, total, setTotal, agregarAlCarrito, carrito, setCarrito}}>
      <BrowserRouter>
      <BarraNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/carrito" element={ <Carrito />} />
      </Routes>
      </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}

export default App;

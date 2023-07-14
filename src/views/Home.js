import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import {  Col, Row } from 'react-bootstrap'
import Cards from '../components/Cards' 
const Home = () => {
    const { pizzas } = useContext(Contexto);
  return (
    <div>
      <div class="banner">
  <img src="https://i.blogs.es/fff4ca/pizzas/1366_521.jpg" alt="Banner" />
  <div class="overlay">
    <h1>¡Pizzería MammaMia!</h1>
  </div>
</div>
    <Row>
        {pizzas.map((p,i) => {
            return  <Col key={i}> <Cards pizza={p}></Cards ></Col> 
        })}
    </Row>
    </div>
  )
}

export default Home 
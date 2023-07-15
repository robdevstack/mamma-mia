import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

const Cards = ({pizza}) => {
  const {agregarAlCarrito} = useContext(Contexto);
  const navigate = useNavigate();
  const navPizza = (id) => {
    navigate(`/pizza/${id}`)
  }
  return (
    <Card style={{ width: '340px', margin: '1em' }}>
    <Card.Img variant="top" src={pizza.img} />
    <Card.Body>
      <Card.Title className='nombre'>{pizza.name}</Card.Title> 
      <Card.Text>
        <ul>
          {pizza.ingredients.map((ing, i) => {
            return (<li key={i}>🍕{ing}</li>)
          })}
        </ul>
      </Card.Text>
      <Card.Title className='precio'> ${pizza.price}</Card.Title> 
      <Button className='btn' variant="primary" onClick={() => navPizza(pizza.id)}>Detalles</Button>
      <Button variant="danger" onClick={() => agregarAlCarrito(pizza.id)}>Añadir al carrito</Button>

    </Card.Body>
  </Card>
  )
}

export default Cards
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Contexto from '../context/Contexto';
import { Button, Card } from 'react-bootstrap';

const Pizza = () => {
    const { id } = useParams();
    const {pizzas, agregarAlCarrito} = useContext(Contexto)

    const pizza = pizzas.find((p) => p.id === id);
  return (
    <div className='cardd'>
    <Card style={{ width: '50vw', margin: '1em' }}>
    <Card.Img style={{ height: '25vw'}}  variant="top" src={pizza.img} />
    <Card.Body>
      <Card.Title>{pizza.name}</Card.Title> 
      <Card.Text>
       {pizza.desc}
      </Card.Text>
      <Button variant="danger" onClick={() => agregarAlCarrito(pizza.id)}>Añadir al carrito</Button>

    </Card.Body>
  </Card>
  </div>
  )
}

export default Pizza
import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Contexto from '../context/Contexto'
import { Link } from 'react-router-dom'

const BarraNav = () => {

   const {total} = useContext(Contexto)
  return (
    <Navbar className="bg-danger">
    <Container>
      <Link to="/" className='logo'>🍕 MammaMia!</Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/carrito" >🛒 Total:{`${total}`}</Link>
          
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
  )
}

export default BarraNav
import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import { Container } from 'react-bootstrap'


const Carrito = () => {
  const {carrito, pizzas  } = useContext(Contexto)
  return (
    <Container>
        {carrito.map((p) => {
          const pizzaActual = pizzas.find((pz) => pz.id === p.id)
          return <section class="clase h-100">
          <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-10">
                <div class="card rounded-3 mb-4">
                  <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
                    <img src={pizzaActual.img} class="col-md-2 col-lg-2 col-xl-2" />


                        <div class="col-md-3 col-lg-3 col-xl-3">
                        <p class="lead fw-normal mb-2">{pizzaActual.name}</p>
                      </div>
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <img class="col-md-2 col-lg-2 col-xl-2" />

                      </div>
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                         <h4> ${pizzaActual.price}</h4>
                        </div>
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <h5 class="mb-0">{p.cantidad}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        })}
          
    </Container>
  )
}

export default Carrito
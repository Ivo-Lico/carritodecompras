import React from 'react'
import Contexto from '../contexto/Contexto'
import { useContext } from 'react'
import Itemcarrito from './Itemcarrito'
import '../css/Carrito.css'
export default function Carrito() {
    const {carrito, total, setTotal, setCarrito, numerito, setNumerito} = useContext(Contexto)


    const borrarproducto = (id, resta)=>{
      setCarrito(carrito.filter(item=>
        item.id !== id
      )
      )
      setTotal(total - resta)
      setNumerito(numerito - 1)
    }
  return (
    <div>
      <div id='contenedorgrande'>
    {
            carrito.map((item,index)=>(
                <Itemcarrito borrarproducto={borrarproducto} index={index} item={item} key={item.id}></Itemcarrito>
            ))
            }
            </div>
            <div id='contenedortotal'>
            <h4 id='total'>Total: ${Math.abs(total.toFixed())}</h4>
            </div>
    </div>
  )
}

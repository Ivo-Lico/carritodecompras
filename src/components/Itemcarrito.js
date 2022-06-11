import React from 'react'
import '../css/Itemcarrito.css'
import Remover from '../imagenes/Remover.png'
export default function Itemcarrito({index, item, id, borrarproducto}) {
  return (
    <div>
      <div id='contenedorcarrito'>
        <h1>{item.titulo}</h1>
        <img className='imagenescarrito' src={item.imagen} alt="" />
        <button id='botonremover' onClick={()=>borrarproducto(item.id,item.precio)}><img id='remover' src={Remover} alt="" /></button>
        <h4 id='precio2'>${item.precio}</h4>
        </div>
    </div>
  )
}
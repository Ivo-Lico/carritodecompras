import React from 'react'
import '../css/Detalle.css'
import Cerrar from '../imagenes/Cerrar.png'
export default function Detalle(
{productoelegido, productos, setshowdetalle}) {
  console.log(productos, productoelegido,"consolelog productos y productoelegido")

  function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  }
  const titulo = limit(productos[productoelegido].title, 12) 
  return (
    <div id='contenedor'>
        <div id='contenedordetalle'>
        <h1 id='titulo'>{titulo}...</h1>
        <img src={productos[productoelegido].image} alt="" />
        <h2 id='precio'>${productos[productoelegido].price}</h2>
        <p>{productos[productoelegido].description}</p>
        <button id='botonc' onClick={()=>setshowdetalle(false)} ><img src={Cerrar} alt="" /></button>
        </div>
    </div>
  )
}

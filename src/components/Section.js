import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Contexto from '../contexto/Contexto'
import "../css/Section.css"
import Sumar from '../imagenes/boton.png'
import { productoID } from '../helpers/funcionID'
import carritomas from '../imagenes/carritomas.png'
import placeholder from '../imagenes/placeholder.png'
export default function Section() {
  const [productodestacado, setproductodestacado] = useState({})
    const {listarProductos, show,  carrito, setCarrito, numerito, setNumerito, total, setTotal} = useContext(Contexto)
    useEffect(() => {
      listarProductos()
    },[]);
    
    const traerProd = async()=>{
      await fetch('https://fakestoreapi.com/products/1')
      .then(res=>res.json())
      .then(json=>{
          setproductodestacado(json)
      })
  }

  const sumarCarrito = ()=>{
    setCarrito([...carrito,{
      titulo: productodestacado.title,
      imagen: productodestacado.image, 
      precio: productodestacado.price,
      id: productoID(carrito),
    }])
    setNumerito(numerito + 1)
    setTotal(total + productodestacado.price)
    window.scrollTo( {top: 0, behavior:'smooth'} )
  }

  useEffect(() => {
      traerProd()
  },[]);
  return (
   
    <div>
  <div>
    {show === true ? <div id='contenedorsection'><div id='prod'><h1 id='destacado'>Producto destacado</h1><img id='img' src={productodestacado.image} alt="" /><h2 id='title'>{productodestacado.title}</h2><p onClick={sumarCarrito}><img id='botons' src={carritomas} alt="" /></p>
<div>
</div>
    </div></div> : <div id='contenedorplaceholder'><img id='placeholder' src={placeholder} alt="" /></div>}
    </div>
    </div>
  )
}

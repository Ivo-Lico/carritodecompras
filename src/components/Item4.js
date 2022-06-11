import React from 'react'
import '../css/Productos.css'
import Contexto from '../contexto/Contexto'
import { useContext,useState } from 'react'
import { productoID } from '../helpers/funcionID'
import Boton from '../imagenes/boton.png'
import Detalle from './Detalle'
import Lupita from '../imagenes/Lupita.png'
import carritomas from '../imagenes/carritomas.png'
export default function Item4(props) {
    const {title, price, image, index, productos}=props
    
    const {carrito, setCarrito, numerito, setNumerito, total, setTotal} = useContext(Contexto)

    const [productoelegido, setproductoelegido] = useState()

    const [showdetalle, setshowdetalle] = useState(false)

    const funciondetalle = ()=>{
      setproductoelegido(index)
      setshowdetalle(true)
      window.scrollTo( {top:650, behavior:'smooth'} )
    }
    const sumarCarrito = ()=>{
        setCarrito([...carrito,{
          titulo: title,
          imagen: image, 
          precio: price,
          id: productoID(carrito),
        }])
        setNumerito(numerito + 1)
        setTotal(total + price)
        window.scrollTo( {top: 0, behavior:'smooth'} )
      }
console.log(carrito,"este es el carrito")
  return (
    <>
        <div  itemScope itemType="https://schema.org/Product" className='card'>
        <div id='contenedorchico'>
              <img className='imagen' src={image} alt=""/>
              <h1 itemProp='model' className='titulo'>{title}</h1>
              <div className='contenedorprecio'>
              <h3 className='precio'>${price}</h3>
              <button onClick={sumarCarrito} className='boton'> <img src={carritomas} alt="" /></button>
              <button id='botondetalle' onClick={funciondetalle}><img src={Lupita} alt="" /></button>
              </div>
              </div>
              </div>
{showdetalle  ? <Detalle showdetalle={showdetalle} setshowdetalle={setshowdetalle} productos={productos} title={title} image={image} price={price} productoelegido={productoelegido} /> : null}
   </>
  )
}

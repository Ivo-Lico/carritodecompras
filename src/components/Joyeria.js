import React from 'react'
import { useState, useEffect, useContext} from 'react'
import Item2 from './Item2'
import '../css/Contenedor.css'
import loader from '../imagenes/Loading.gif'
import Contexto from '../contexto/Contexto'
export default function Joyeria() {
    const [productos, setproductos] = useState(null)
    const {listarProductos} = useContext(Contexto)
    const traerJoyeria = async()=>{
        await fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>{
            console.log(json,"esta es la joyeria")
            setproductos(json)
        })
    }
    useEffect(() => {
        traerJoyeria()
        listarProductos()
    },[]);

    const iterarItems2 = ()=>{
        if(productos !== null){
            return(
            <>
                <div className='contenedor'>
            {
            productos.map((item, index)=>(
                <Item2 productos={productos} index={index} {...item} item={item} key={item.id}></Item2>
            ))
            }
                </div>
                </>
            )

        }
        else{
            return( <div id='contenedorloader'><img src={loader} alt="" /></div> )
        }
}
  return (
    <div>
        {iterarItems2()}
    </div>
  )
}

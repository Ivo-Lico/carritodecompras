import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Item3 from './Item3'
import '../css/Contenedor.css'
import loader from '../imagenes/Loading.gif'
import Contexto from '../contexto/Contexto'
export default function RopaM() {
    const [productos, setproductos] = useState(null)
    const {listarProductos} = useContext(Contexto)
    const traerRopaM = async()=>{
        await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(res=>res.json())
        .then(json=>{
            console.log(json,"esta es la ropa de mujer")
            setproductos(json)
        })
    }
    useEffect(() => {
        traerRopaM()
        listarProductos()
    },[]);

    const iterarItems3 = ()=>{
        if(productos !== null){
            return(
            <>
                <div className='contenedor'>
            {
            productos.map((item, index)=>(
                <Item3 index={index} productos={productos} {...item} item={item} key={item.id}></Item3>
            ))
            }
                </div>
                </>
            )

        }
        else{
            return(<div id='contenedorloader'><img src={loader} alt="" /></div> )
        }
}
  return (
    <div>
        {iterarItems3()}
    </div>
  )
}
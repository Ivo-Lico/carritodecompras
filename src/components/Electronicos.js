import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Item1 from './Item1'
import '../css/Contenedor.css'
import loader from '../imagenes/Loading.gif'
import Contexto from '../contexto/Contexto'
export default function Electronicos() {
    const [productos, setproductos] = useState(null)
    const {listarProductos} = useContext(Contexto)
    const traerElectronicos = async()=>{
        await fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setproductos(json)
        })
    }
    useEffect(() => {
        traerElectronicos()
        listarProductos()
    },[]);


    const iterarItems1 = ()=>{
        if(productos !== null){
            return(
            <>
                <div className='contenedor'>
            {
            productos.map((item, index)=>(
                <Item1 productos={productos} index={index} {...item} key={item.id} item={item}>
                </Item1>
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
        {iterarItems1()}
    </div>
  )
}

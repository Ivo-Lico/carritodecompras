import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Item4 from './Item4'
import '../css/Contenedor.css'
import loader from '../imagenes/Loading.gif'
import Contexto from '../contexto/Contexto'
export default function RopaH() {
    const [productos, setproductos] = useState(null)
    const {listarProductos} = useContext(Contexto)
    const traerElectronicos = async()=>{
        await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
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

    const iterarItems4 = ()=>{
        if(productos !== null){
            return(
            <>
                <div className='contenedor'>
            {
            productos.map((item, index)=>(
                <Item4 productos={productos} index={index} {...item} key={item.id} item={item}></Item4>
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
        {iterarItems4()}
    </div>
  )
}
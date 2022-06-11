import Contexto from "./Contexto";
import React,{useState} from 'react'
import Loading from '../imagenes/Loading.gif'
export default function UsarContexto(props) {
    const { children } = props
    const [categorias1, setCategorias1] = useState()
    const [categorias2, setCategorias2] = useState()
    const [categorias3, setCategorias3] = useState()
    const [categorias4, setCategorias4] = useState()
    const [carrito, setCarrito] = useState([])
    const [show, setshow] = useState(false)
    const [numerito, setNumerito] = useState(0)
    const [total, setTotal] = useState(0)

    const [loader, setloader] = useState(Loading)

    const listarProductos = async()=>{
      await fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json=>{
        setCategorias1(json[0])
        setCategorias2(json[1])
        setCategorias3(json[3])
        setCategorias4(json[2])
        console.log(json)
        setshow(true)
      })
    }
  return (
    <Contexto.Provider 
    value={{listarProductos, categorias1, categorias2, categorias3, categorias4, show, carrito, setCarrito, numerito, setNumerito, total, setTotal, loader, setloader}}>
    {children}
    </Contexto.Provider>
  )
}

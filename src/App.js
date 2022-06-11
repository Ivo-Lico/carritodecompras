
import Section from "./components/Section";
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Electronicos from './components/Electronicos'
import Joyeria from './components/Joyeria'
import RopaM from './components/RopaM';
import RopaH from "./components/RopaH";
import Contexto from "./contexto/Contexto";
import { useContext, useState } from "react";
import Carrito from "./components/Carrito";
import './css/App.css'
import carritoimagen from './imagenes/carritoimagen.png'
function App() {
  const [color1, setcolor1] = useState('')
  const [color2, setcolor2] = useState('')
  const [color3, setcolor3] = useState('')
  const [color4, setcolor4] = useState('')
  const categoriaclickeada1 = ()=>{
    setcolor1('categoriaclickeada1')
    setcolor2('')
    setcolor3('')
    setcolor4('')
  }
  const categoriaclickeada2 = ()=>{
    setcolor2('categoriaclickeada2')
    setcolor1('')
    setcolor3('')
    setcolor4('')
  }
  const categoriaclickeada3 = ()=>{
    setcolor3('categoriaclickeada3')
    setcolor2('')
    setcolor1('')
    setcolor4('')
  }
  const categoriaclickeada4 = ()=>{
    setcolor4('categoriaclickeada4')
    setcolor2('')
    setcolor3('')
    setcolor1('')
  }
  const { categorias1, categorias2, categorias3, categorias4, numerito } = useContext(Contexto)

  return (
<>
<BrowserRouter>
<header>
<h1 id="tituloheader">Tiendita faker api</h1>
<li><Link className="links" to='/carrito' ><div><span><p id="numero">{numerito}</p></span><img id="carritoimagen" src={carritoimagen} alt="" /></div> </Link></li>
</header>
<nav>
  <div id="contenedornav">
<li><Link className="links" to='/' ><p className="categorias" id="home">Home</p> </Link></li>
<li><Link className="links" to='/electronicos'><p onClick={categoriaclickeada1} id={color1} className="categorias">{categorias1}</p> </Link></li>
<li><Link className="links" to='/joyeria' ><p onClick={categoriaclickeada2} id={color2} className="categorias">{categorias2}</p> </Link></li>
<li><Link className="links" to='/ropam' ><p onClick={categoriaclickeada3} id={color3} className="categorias">{categorias3}</p> </Link></li>
<li><Link className="links" to='/ropah' ><p onClick={categoriaclickeada4} id={color4} className="categorias">{categorias4}</p> </Link></li>
</div>
    </nav>
    <Routes>
   <Route path='/' element={<Section />}/>
   <Route path='/electronicos' element={<Electronicos />}/>
   <Route path='/joyeria' element={<Joyeria  />}/>
   <Route path='/ropam' element={<RopaM  />}/>  
   <Route path='/ropah' element={<RopaH />}/>
   <Route path='/carrito' element={<Carrito  />}/>       
   </Routes>
   </BrowserRouter>
   <footer>
     <p>Footer</p>
   </footer>
</>
  );
}
export default App;

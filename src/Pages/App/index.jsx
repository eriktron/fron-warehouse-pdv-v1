import Home from '../Home'
import Categoria from '../Categoria'
import Estado from '../Estado'
import Unidad from '../Unidad'
import Proveedor from '../Proveedor'
import NotFound from '../NotFound'
import Sesion from '../Sesion'
import './App.css'

function App() {

  return (
    <div className="bg-green-400">
        Index
        <Home />
        <Categoria />
        <Estado />
        <Unidad />
        <Proveedor />
        <NotFound />
        <Sesion />
    </div>
  )
}

export default App
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Categoria from '../Categoria'
import Estado from '../Estado'
import Unidad from '../Unidad'
import Proveedor from '../Proveedor'
import NotFound from '../NotFound'
import Sesion from '../Sesion'
import Navbar from '../../Componentes/Navbar'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/categoria', element: <Categoria />},
    {path: '/estado', element: <Estado />},
    {path: '/unidad', element: <Unidad />},
    {path: '/proveedor', element: <Proveedor />},
    {path: '/*', element: <NotFound />},
    {path: '/sesion', element: <Sesion />},
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
    // <div className="bg-green-400">
    //     Index
        
    // </div>
  )
}

export default App
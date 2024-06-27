import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>WarehousePDV</NavLink>
                </li>
                <li>
                    <NavLink to='/home' className={({ isActive }) => isActive ? activeStyle : undefined}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/sesion' className={({ isActive }) => isActive ? activeStyle : undefined}>Sesion</NavLink>
                </li>
                <li>
                    <NavLink to='/proveedor' className={({ isActive }) => isActive ? activeStyle : undefined}>Proveedor</NavLink>
                </li>
                <li>
                    <NavLink to='/categoria' className={({ isActive }) => isActive ? activeStyle : undefined}>Categoria</NavLink>
                </li>
                <li>
                    <NavLink to='/unidad' className={({ isActive }) => isActive ? activeStyle : undefined}>Unidad</NavLink>
                </li>
                <li>
                    <NavLink to='/estado' className={({ isActive }) => isActive ? activeStyle : undefined}>Estado</NavLink>
                </li>
                <li>
                    <NavLink to='/cliente' className={({ isActive }) => isActive ? activeStyle : undefined}>Cliente</NavLink>
                </li>
                <li>
                    <NavLink to='/producto' className={({ isActive }) => isActive ? activeStyle : undefined}>Producto</NavLink>
                </li>
                <li>
                    <NavLink to='/stock' className={({ isActive }) => isActive ? activeStyle : undefined}>Stock</NavLink>
                </li>
                <li>
                    <NavLink to='/transaccion' className={({ isActive }) => isActive ? activeStyle : undefined}>Transaccion</NavLink>
                </li>
                <li>
                    <NavLink to='/rol' className={({ isActive }) => isActive ? activeStyle : undefined}>Rol</NavLink>
                </li>
                <li>
                    <NavLink to='/venta' className={({ isActive }) => isActive ? activeStyle : undefined}>Venta</NavLink>
                </li>
                <li>
                    <NavLink to='/usuario' className={({ isActive }) => isActive ? activeStyle : undefined}>Usuario</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
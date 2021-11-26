import React from 'react'
import ImagenLogo from './ImagenLogo'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <nav className = 'w-72 border border-gray-300 h-full flex fixed z-30 bg-yellow-100  justify-between'>
            <ul>
                <li>
                    <ImagenLogo />
                </li>
                <Link to="/admin/articulos"><li>Articulos</li></Link>
                <Link to="/admin/categorias"><li>Categorias</li></Link>
                <Link to="/admin/usuarios"><li>Usuarios</li></Link>
                <Link to="/admin/administrador"><li>Administrador</li></Link>
            
</ul>
        </nav>
    )
}

export default Sidebar

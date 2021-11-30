import React from 'react'
import ImagenLogo from './ImagenLogo'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    
    return (
        <nav className = 'w-72  border-r -gray-300 h-full flex fixed z-30 bg-yellow-100  justify-between'>
            <ul>
                <li>
                    <ImagenLogo />
                </li>
                
                <Link  to="/admin/articulos" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group  hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b border-t border-pro-100">Articulos</li></Link>
                <Link  to="/admin/categorias" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group   hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b   border-pro-100">Categorias</li></Link>
                <Link  to="/admin/usuarios" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group   hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b   border-pro-100">Usuarios</li></Link>
                <Link  to="/administrador" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group  hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b  border-pro-100">Administrador</li></Link>
            
</ul>
        </nav>
    )
}

export default Sidebar

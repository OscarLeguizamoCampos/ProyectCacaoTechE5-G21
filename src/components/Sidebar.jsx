import React from 'react'
import ImagenLogo from './ImagenLogo'
import { Link } from 'react-router-dom'
import useActiveRoute from 'hooks/useActiveRoute';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateComponent from './PrivateComponent';

const Sidebar = () => {
    const { user  } = useAuth0();
    return (
        <nav className = 'w-72  border-r -gray-300 h-full flex fixed z-30 bg-yellow-100  justify-between'>
            <ul>
                <li>
                    <ImagenLogo />
                </li>
                <Ruta icono='fas fa-user' ruta='/admin/perfil' nombre='Perfil' usuario={user} />
                <PrivateComponent roleList={['administrador']}>
                    <Ruta icono='fas fa-car' ruta='/admin/articulos' nombre='Articulos' />
                {/* <Link  to="/admin/articulos" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group  hover:bg-pro-50  */}
                                            {/* hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b border-t border-pro-100">Articulos</li></Link> */}
                </PrivateComponent> 
                <PrivateComponent roleList={['administrador', 'vendedor']}>
                    <Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='Ventas' />
                </PrivateComponent>
                <PrivateComponent roleList={['administrador']}>
                    <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
                </PrivateComponent>                           
                {/* <Link  to="/admin/categorias" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group   hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b   border-pro-100">Categorias</li></Link>
                <Link  to="/admin/usuarios" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group   hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b   border-pro-100">Usuarios</li></Link>
                <Link  to="/administrador" className=" menu nav-link has-sub-menu inline-block  justify-between   "><li className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group  hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b  border-pro-100">Administrador</li></Link>
             */}
</ul>
        </nav>
    )
}

const Ruta = ({ icono, ruta, nombre, usuario }) => {
    console.log('usuario', usuario);
    const isActive = useActiveRoute(ruta);
    return (
      <Link to={ruta}>
        <button
          className={`p-1 my-2  bg-${
            isActive ? 'indigo' : 'gray'
          }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
        >
          {usuario ? (
            <>
              {/* <img src={usuario.picture} className='h-5 w-5 rounded-full' /> */}
              {usuario.name}
            </>
          ) : (
            <>
              <i className={`${icono} w-10`} />
              {nombre}
            </>
          )}
        </button>
      </Link>
    );
  };

export default Sidebar

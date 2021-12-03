import React from 'react'
 
import { useAuth0 } from "@auth0/auth0-react"
const HeaderSidebar = () => {
    const { logout } = useAuth0();

    const cerrarSesion = () => {
        logout({ returnTo: 'http://localhost:3000/' });
        localStorage.setItem('token', null);
      };
    return(
        
        <div className="  h-20 bg-pro-100  grid-flow-col grid grid-cols-2 justify-between inset-0 fixed left-72 z-20 rounded">
            <div className="col-span-1 text-white text-extrabold font-mono text-xl p-5  ">
                ADMINISTRADOR CACAOTECH
            </div>
            {/* <Link to='/login' className=" relative mx-96 mb-2 p-5"> */}
            <div className=" relative  flex justify-end mb-2 p-5">
                <button
                    onClick={() =>  cerrarSesion()}
                    className='group relative   w-40 z-20 flex justify-center  py-2 px-4 border border-white 
                        text-sm font-medium rounded-md text-white  border-whitebg-pro-100 hover:bg-orange-500 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pro-100 '
                >
                    Cerrar Sesión
                </button>
                </div>
            {/* </Link> */}
        </div>
        
    )
}
 

export default HeaderSidebar

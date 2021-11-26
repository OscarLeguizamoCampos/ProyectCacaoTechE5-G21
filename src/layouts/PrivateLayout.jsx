import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const PrivateLayout = ({ children }) => {
    return (
        <div className = ' flex w-screen h-screen'>
            <div className = 'flex flex-nowrap h-full w-full'>
                <Sidebar />                    

                <main className = ' w-full   items-start justify-center '>
                <div className="w-full h-20 bg-pro-100   grid grid-cols-2 justify-between inset-0 fixed left-72 z-20 rounded"> 
                        <div className="col-span-1 text-white text-extrabold font-mono text-xl p-5  ">
                        ADMINISTRADOR CACAOTECH</div>
                        <Link to='/login' className=" relative mx-64 mb-2 p-5">
                <button
                        type='submit'
                        className='group relative w-40 z-20 flex justify-center  py-2 px-4 border border-white 
                        text-sm font-medium rounded-md text-white  border-whitebg-pro-100 hover:bg-orange-500 focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-pro-100 ' 
                    >    
                        Salir
                </button>
            </Link>
                    </div>
                   <div className=" relative top-20 left-72 z-0 ">
                    { children }   </div>
                    </main>
 
            </div>
            
        </div>
    )
}

export default PrivateLayout

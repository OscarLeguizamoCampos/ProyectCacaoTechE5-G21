import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MenuMobile = () => {
    const [isList, setIsList] = useState(false);
    const [isSubList, setIsSubList] = useState(false);
    const { loginWithRedirect } = useAuth0();
    return (
        <div className=" bg-pro-50 border-r border-pro-100 w-64    flex flex-col justify-between flex-nowrap    md:hidden  ">
        <div className="          fondo flex   mx-auto box-content  wrapper    ">





            <div>
                <div onClick={() => setIsList(!isList)} className="   md:hidden rounded  text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                    <div className=" px-2 cursor-pointer md:hidden   " >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                </div>
                {isList && (
                    <div className="w-64      ">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="    nav-link has-sub-menu menu   inline-block align-middle ">
                                <div className=" items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-t border-b border-pro-100  ">
                                    <div className="pl-5  items-center  ">
                                        INICIO
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="w-64      ">
                            <div className="flex items-center justify-between  ">
                                <div className="flex items-center ">        
                                    <Link to="/cursos/menu-servicios" className="  menu nav-link has-sub-menu inline-block align-middle justify-between" >
                                        <div onClick={() => setIsSubList(2)} fill="none" className="  items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b border-pro-100  ">
                                            <div  >
                                        
                                                <div className="pl-0 items-center grid grid-cols-10 ">
                                                        <div className="w-0 gap-36">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg> 
                                                        </div>
                                                    <span>SERVICIOS</span> 
                                                </div>
                                            </div> 
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {isSubList === 2 && (
                                <div className="  ">
                                    <div className="flex items-center  ">                                        
                                        <Link to="/cursos/curso-fertilizantes" className="  menu nav-link has-sub-menu  ">
                                            <div className="items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b  border-pro-100 ">
                                                <div className="pl-8 flex items-center">CURSO FERTILIZANTES</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex items-center  ">                                        
                                        <Link to="/cursos/curso-control-plagas" className="  menu nav-link has-sub-menu  ">
                                            <div className="items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b  border-pro-100 ">
                                                <div className="pl-8 flex items-center">CURSO CONTROL DE PLAGAS</div>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div className="w-64      ">
                            <div className="flex items-center justify-between  ">
                                <div className="flex items-center ">        
                                    <Link to="/products/productos" className="  menu nav-link has-sub-menu inline-block align-middle justify-between" >
                                        <div onClick={() => setIsSubList(3)} fill="none" className="  items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b border-pro-100  ">
                                            <div  >
                                        
                                                <div className="pl-0 items-center grid grid-cols-10 ">
                                                        <div className="w-0 gap-36">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg> 
                                                        </div>
                                                    <span>PRODUCTOS</span> 
                                                </div>
                                            </div> 
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {isSubList === 3 && (
                                <div className="  ">
                                    <div className="flex items-center  ">                                        
                                        <Link to="/products/fertilizantes" className="  menu nav-link has-sub-menu  ">
                                            <div className="items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b  border-pro-100 ">
                                                <div className="pl-8 flex items-center">FERTILIZANTES</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex items-center  ">                                        
                                        <Link to="/products/plaguicidas" className="  menu nav-link has-sub-menu  ">
                                            <div className="items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b  border-pro-100 ">
                                                <div className="pl-8 flex items-center">PLAGUICIDAS</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex items-center  ">                                        
                                        <Link to="/products/clones" className="  menu nav-link has-sub-menu  ">
                                            <div className="items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b  border-pro-100 ">
                                                <div className="pl-8 flex items-center">CLONES</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex items-center  ">                                        
                                        <Link to="/products/herramientas" className="  menu nav-link has-sub-menu  ">
                                            <div className="items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b  border-pro-100 ">
                                                <div className="pl-8 flex items-center">HERRAMIENTAS</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex items-center  ">                                        
                                        <Link to="/products/infraestructura" className="  menu nav-link has-sub-menu  ">
                                            <div className="items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-b  border-pro-100 ">
                                                <div className="pl-8 flex items-center">INFRAESTRUCTURA</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-64      ">
                            <div className="flex items-center justify-between">
                                <Link to="/contactar" className="    nav-link has-sub-menu menu   inline-block align-middle ">
                                    <div className=" items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-pro-50 
                                                hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1   border-b border-pro-100  ">
                                        <div className="pl-5  items-center  ">
                                            CONTACTAR
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="md:hidden h-11 w-60 text-center"> 
                         
                            <button onClick={() => loginWithRedirect()}  class="botonGenerico mainButton pt-1 inline-block w-full align-center"><p class="textbutton pt-2 ">Acceder</p>  </button>
                            </div>
                        </div>
     
      
                    </div>
                )}
 
            </div>


        </div></div>
    )
}

export default MenuMobile

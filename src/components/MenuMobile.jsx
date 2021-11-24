import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
const MenuMobile = () => {
    const [isList, setIsList] = useState(false);
    const [isSubList, setIsSubList] = useState(3);
    return (
        <div className="    collapse navbar-collapse navbar navbar-expand-sm navbar-light   fondo flex   mx-auto box-content  wrapper menu-bg custom-menu-bg border-bottom-black-tr  ">


 

    
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
                        <div className="flex items-center md:hidden   bg-transparent h-11 w-60  group border-indigo-500 hover:bg-gray-50 
                                        hover:shadow-lg hover:border-transparent group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1  border-t  border-yellow-700 pb-3 ">
                            {/* <svg onClick={() => setIsSubList(1)}  viewBox="0 0 12 12" fill="none"  >
                             
                            </svg> */}
                            <div className="pl-4 flex items-center  ">
                               
                                <Link to="/" className="  menu nav-link has-sub-menu p-2">INICIO</Link>
                            </div>
                        </div>
                         
                    </div>
 
                    <div>
                        <div className="flex items-center justify-between    ">
                            <div className="flex items-center ">
                                {/* <svg onClick={() => setIsSubList(2)} width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                                <div onClick={() => setIsSubList(2)} fill="none"   className="pl-4 flex items-center bg-transparent h-11 w-60  group border-indigo-500 hover:bg-gray-50 
                                        hover:shadow-lg hover:border-transparent group-hover:text-gray-900 transition md:ease-out duration-700  grid-cols-1  border-t pb-3">
                                    {/* <div className=" dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">} */}
                                        {/* <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" /> */}
                                        <div className=" flex items-center ">
                                            <Link to="/cursos/menu-servicios" className="  menu nav-link has-sub-menu p-2" >SERVICIOS</Link>
                                        </div>
                                    {/* </div> */}
                                    
                                </div>
                            </div>
                            
                        </div>
                        {isSubList === 2 && (
                            <div className="pl-8 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-normal ml-2 text-gray-800 w-full bg-gray-300">USA</p>
                                    </div>
                                    <p className="w-8 text-xs leading-3 text-right text-indigo-700">2,381</p>
                                </div>
                                <div className="flex pt-4 items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-normal ml-2 text-gray-800">Germany</p>
                                    </div>
                                    <p className="w-8 text-xs leading-3 text-right text-indigo-700">2,381</p>
                                </div>
                                <div className="flex pt-4 items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-normal ml-2 text-gray-800">Italy</p>
                                    </div>
                                    <p className="w-8 text-xs leading-3 text-right text-indigo-700">2,381</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center md:hidden ">
                                <svg onClick={() => setIsSubList(3)} width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="pl-4 flex items-center">
                                    <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-normal ml-2 text-gray-800">Instagram</p>
                                </div>
                            </div>
                            <p className="w-8 text-xs leading-3 text-right text-indigo-700">5,142</p>
                        </div>
                        {isSubList === 3 && (
                            <div className="pl-8 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-normal ml-2 text-gray-800">USA</p>
                                    </div>
                                    <p className="w-8 text-xs leading-3 text-right text-indigo-700">2,381</p>
                                </div>
                                <div className="flex pt-4 items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-normal ml-2 text-gray-800">Germany</p>
                                    </div>
                                    <p className="w-8 text-xs leading-3 text-right text-indigo-700">2,381</p>
                                </div>
                                <div className="flex pt-4 items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-normal ml-2 text-gray-800">Italy</p>
                                    </div>
                                    <p className="w-8 text-xs leading-3 text-right text-indigo-700">2,381</p>
                                </div>
                            </div>
                            
                        )} 
                    </div>
                    <div>
                    <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center md:hidden ">
                          
                                <div className="pl- flex items-center">
                                <div className="   dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">                              
                                    </div>
                                    <Link to="/contactar" className=" nav-link has-sub-menu">CONTACTAR</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <button className="text-xs bg-indigo-100 hover:bg-indigo-200 rounded-md mt-6 font-medium py-2 w-full leading-3 text-indigo-700">Select</button>
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
 

        </div>
    )
}

export default MenuMobile

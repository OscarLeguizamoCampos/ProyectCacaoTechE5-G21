import React from 'react'
import Sidebar from '../components/Sidebar'
import PrivateRoute from 'components/PrivateRoute';
import HeaderSidebar from 'components/HeaderSdebar';

const PrivateLayout = ({ children }) => {
    return (
        <PrivateRoute >
            <div className = ' flex w-screen h-screen'>
                <div className = 'flex flex-nowrap h-full w-11/12'>
                    <Sidebar />                    
                    <main className = ' w-full   items-start justify-center '>
                        <HeaderSidebar/>
                    <div className=" relative top-20 left-72 z-0  ">
                        { children }   
                        </div>
                    </main> 
                </div>            
            </div>
         </PrivateRoute> 
    )
}

export default PrivateLayout

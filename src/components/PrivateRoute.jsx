import React from 'react'; 
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if(isLoading)
    return  <div>LOADING...</div>;
     
        return isAuthenticated ?(
            <> {children} </>
        ):(<div>
            <div className="text-3x1  text-red-600">No estas autorizado para ingresar a este sitio</div>
        
        <Link to='/'>
            <span  className = "text-blue-600 font-bold ">
                Levame al Home
            </span>
        </Link>  
        </div>  )
    
}

export default PrivateRoute

import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import PrivateRoute from 'components/PrivateRoute';
import HeaderSidebar from 'components/HeaderSdebar';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext'; 

const PrivateLayout = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } =
    useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      // si se quieren hacer validaciones con el token:
      // if (localStorage.getItem('token')) {
      //   // validar fecha de expiracion del token
      // } else {
      //   // pedir token
      // }

      // 1. pedir token a auth0
      setLoadingUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `concesonario-2`,
      });
      // 2. recibir token de auth0
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
      // 3. enviarle el token a el backend
      await obtenerDatosUsuario(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log('err', err);
          setLoadingUserInformation(false);
          logout({ returnTo: 'http://localhost:3000' });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  if (isLoading || loadingUserInformation)
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }
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

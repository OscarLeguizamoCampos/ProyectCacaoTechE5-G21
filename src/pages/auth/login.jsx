import React from 'react'
import Google from "media/google_logo.png"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
         
        <>
                <div className='max-w-md w-full space-y-8'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Inicia sesión en tu cuenta
                </h2>
                <form className='mt-8 space-y-6'>
                    <input type='hidden' name='remember' defaultValue='true' />
                    <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                        <input
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Correo Electrónico'
                        />
                    </div>
                    <div>
                        <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Contraseña'
                        />
                    </div>
                    </div>

                    <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                        />
                        <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                        Recuérdame
                        </label>
                    </div>

                    <div className='text-sm'>
                        <Link to='/' className='font-medium text-pro-100 hover:text-orange-500'>
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    </div>
                    <div>
                    <Link to='/administrador' className="  ">    
                    <button
                        type='submit'
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pro-100 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pro-100'
                    >
                        
                       Inicia sesión
                    </button></Link>
                    </div>

                    <div className='flex items-center justify-between'>
                    <span>¿No tienes cuenta?</span>
                    <Link to='/registro'>
                        <span className='font-medium text-pro-100 hover:text-orange-500'>Regístrate</span>
                    </Link>
                    </div>
                </form>
                </div>
                <div className='flex items-center justify-center'>
                <span className='mx-4'>------------------------</span>
                <h2 className='my-4 text-center text-sm font-extrabold text-gray-900'>O</h2>
                <span className='mx-4'>------------------------</span>
                </div>
                <div className='max-w-md w-full'>
                <div>
                    <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                    <div className='flex items-center justify-start'>
                        <img src={Google} alt='Logo Google' className='h-6 w-6' />
                        <span className='mx-4'>Continúa con Google</span>
                    </div>
                    </button>
                </div>
                <Link to='/'className='flex items-center justify-center'>
                <button
                        type='button'
                        className='group relative w-40 z-20 flex justify-center  py-2 px-4 border border-white 
                        text-sm font-medium rounded-md text-white bg-red-500 border-whitebg-pro-100 hover:bg-red-600 focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-pro-100 ' 
                    >    
                        Regresar
                </button></Link>
                
                </div>
        </>

    )
}

export default Login

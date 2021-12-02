import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from 'components/ImagenLogo'

const AuthLayout = ({children}) => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-600 py-2 px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex items-start'>
                <Link to='/'>
                <i className='fas fa-home cursor-pointer hover:text-indigo-500' />
                </Link>
            </div>
            <div className='max-w-md w-full bg-orange-200  rounded-xl border border-orange-600 p-4'>
                <ImagenLogo />
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
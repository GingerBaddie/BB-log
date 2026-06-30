import React from 'react'
import logo from '../assets/op2.png'
function Logo({width = '100px'}) {
    return (
        <div>
            <img
            className='rounded-full aspect-square object-cover'
            src={logo}
            alt="Logo"
            style={{ width }}
            /> 
        </div>
               
    )
}

export default Logo;

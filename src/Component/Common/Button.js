import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children,linkto}) {
  return (
    <div className='Button'>
    <Link to={linkto} >
            {children}
        
    </Link>
    </div>

  )
}
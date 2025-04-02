import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtected = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    console.log('token' , token);

    useEffect(() => {{
        if(!token && token === null) {
            navigate('/login')
        }
    }}, [token])
    
    // if(!token && token === null) {
    //     navigate('/login')
    // }

  return (
    <>{children}</>
  )
}

export default UserProtected
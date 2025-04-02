import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'
import axios from 'axios'
import { getAPI } from '../Constant';

const CaptainProtectedWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const {  setCaptain } = React.useContext(CaptainDataContext)
    const [isloading, setLoading] = React.useState(true)

    useEffect(() => {{
        if(!token && token === null) {
            navigate('/captain-login')
        }
    }}, [token])

    useEffect(() => {
       axios.get(`${getAPI}captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status !== 200) {
                navigate('/captain-login')
            }
            console.log( 'll' ,response.data);
            
            if(response.status === 200) {
                const data = response.data
                setCaptain(data.captain)
                setLoading(false)
            }
        }).catch((error) => {
            console.log(error)
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
        setLoading(true)
    }, [])

    if(isloading){
        return (
           <div>Loading...</div>
        )
    }
  return (
    <>{children}</>
  )
}

export default CaptainProtectedWrapper
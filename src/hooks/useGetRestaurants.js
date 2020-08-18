import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const useGetRestaurants = (url, initialState, dataPost) => {
    const history = useHistory()
    const [data, setData] = useState(initialState)
    const token = window.localStorage.getItem("token")
    const axiosConfig = {
        headers: {
            auth: token
        }  
    }
    const getRestaurants = () => {          
        axios.get(url, axiosConfig, {
        }).then(response => {
            setData(response.data.restaurants)
        }).catch(err => {
        console.log(err.message)
        })
    }

    useEffect(() => {
        if (token === null) {
            history.push("/")
        } else {
            getRestaurants()
        }
    }, [])

    return [data, getRestaurants]
}

export default useGetRestaurants;
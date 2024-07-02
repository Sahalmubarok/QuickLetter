import axios from 'axios';
import React from 'react'

const Api = () => {
    const API = axios.create({
        baseURL: "http://localhost:3000/",
    }) 

}

export default Api


import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

const baseurl = `https://jsonplaceholder.typicode.com/users/`


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Odontologo = (id) => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {

    try {      
      setLoading(true)
      baseurl =+ {id} 
      console.log(baseurl);
      const respuesta = await fetch(baseurl);
      const userToJson = await respuesta.json();
      setUser(userToJson)
      setLoading(false)
  
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.log("Error:", error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(
    () => {
      getUserData();
    }, []
  )

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      
            <h1>Odontologo seleccionado</h1>

      </div>
    </main>
  )
}

export default Odontologo
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const baseurl = `https://jsonplaceholder.typicode.com/users`

export const UserContext = ({ odontologoId }) => {
  const [loading, setLoading] = useState(false);
  const [odontologo, setOdontologo] = useState([]);

  const getUserData = async (odontologoId) => {
    setLoading(true)
    //const url = `${baseurl}${1}`;
    try {
      const respuesta = await axios.get(baseurl);
      console.log("Axios: ", respuesta.data);
      setOdontologo(respuesta.data);
      setLoading(false)

    } catch (error) {
      console.log("Aca el error: " + error);
    }
  }
  useEffect(
    () => {
      getUserData();
    }, []
  )

  return (
    <div>
      <h1>probando esto</h1>
      <ul>
        {odontologo.map(objeto => (
        <li>{objeto.name}</li>
        ))}
      </ul>
    </div>
  )
}
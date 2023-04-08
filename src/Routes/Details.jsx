import React from 'react'
import { useState, useEffect } from 'react'

const baseurl = `https://jsonplaceholder.typicode.com/users/`

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Details = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(
    () => {
      const UserData = async (id) => {
        try {
          setLoading(true)
          const respuesta = await fetch(`${baseurl}${id}`);
          const userToJson = await respuesta.json();
          setUser(userToJson)
          console.log(userToJson);
          console.log(id);
          console.log("probando");
          setLoading(false)
        } catch (error) {
          console.log("Error:", error)
        } finally {
          setLoading(false)
        }

        UserData();
      }
    }, []
  )
  
  return (
    <>
    <h1>Detail Dentist id {user.id}</h1>
    {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
    {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    <label>{user.name}</label>
  </>
)
}


export default Details
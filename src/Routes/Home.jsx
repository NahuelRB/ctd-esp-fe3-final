import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'

const baseurl = `https://jsonplaceholder.typicode.com/users/`


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {

    try {      
      setLoading(true)
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
      
        {loading ?
        <p>Cargando datos...</p>
        : <ul>
          {user.map(item => 
            <Card
              data={item}
              key={item.id}
            />
            )}
        </ul>  
      }
      </div>
    </main>
  )
}

export default Home
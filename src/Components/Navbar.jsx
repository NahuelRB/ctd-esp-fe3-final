import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonTema} from '../Components/ButtonTema'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className="nav">
              <Link to="/home">Home</Link>           
              <Link to="/favs">Favoritos </Link> 
              <Link to="/contact">Contacto </Link> 
              <Link to="/details">Detalles </Link> 
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
      <ButtonTema/>
    </nav>
  )
}

export default Navbar
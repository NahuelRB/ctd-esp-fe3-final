import React from "react";
import doctorImg from '../images/doctor.jpg'
import { useNavigate } from 'react-router-dom';

const Card = ({data}) => {

  const {name, username,id} = data || ''
  /*const {
    state: {isModoOscuro}
  }*/

  const addFav = e => {
    // Aqui iria la logica para agregar la Card en el localStorage
    e.stopPropagation();
  }

  const navigate = useNavigate();
  
  //const themeClass = isModoOscuro ? 'dark' : 'light';
  
  return (
    <div className="card"
      onClick={() => navigate(`/dentist/${id}`)}
    >
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <img
        className="card-imagen"
        src={doctorImg}
        alt="doctor"
        />

      <div className="card-text">
        <p>
          Name: {name}
        </p>
        <p>
          Username: {username}
        </p>
      </div>


      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button 
      onClick={addFav} 
      className="favButton">Agregar favorito</button>
    </div>
  );
};


export default Card;

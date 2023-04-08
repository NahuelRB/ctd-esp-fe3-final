import React from "react";
import {useState } from "react"

const Form = ({onSubmit}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const[name, setName] = useState("")
  const[surname, setSurname] = useState("")

  const handleSubmit = () =>{
    if(name !== ""){
      onSubmit()
    }else{
      const data = {
        name,
        surname
    }
    onSubmit(data)
    setName("")
    setSurname("")
    }
  }

  return (
    <div className="component-form">
      <h2>Formulario</h2>
      <form onSubmit={e => {
        e.preventDefault(); console.log(e.target.name.value); console.log(e.target.surname.value);
      }}>
        <label>
          Name:
        <input type="text" name="surname" value={setName}></input>
        </label>
        <label>
          Surname:
          <input type="text" name="name" value={setSurname}></input>
        </label>
        <button value="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

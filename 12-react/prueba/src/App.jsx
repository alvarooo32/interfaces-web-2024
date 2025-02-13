import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Componentes/HeaderComponent';
import ButtomComponent from './Componentes/ButtomComponent';
import React, { useState } from 'react';
import Login from './Componentes/Login';

function App() {

  //Variables
  //let number = 0; 
  const[number, setNumber] = useState(0); //Variable reactiva 0 es el valor determinado == const[vaiable, setNombreVariable]
  const[myValue, setMyValue] = useState("");
  let myPlaceholder = "Escribe aqui"; //variable que se introduce a una etiqueta

  const [greetings, setGreetings] = useState("a mi web"); //mandar informacion de PADRE a HIJO(HeaderComponent) con props
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us"
  }

  const [user, setUser] = useState({ })//Pasar contenido de HIJO A PADRE

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo) 
  }

  const addOne = () => {
    //number++;
    setNumber(number +1); // se le suma 1 a la varieble reactiva q hemos creado
    console.log(number);
  }
  const sayHello = () => {
    console.log("Hello!");
  }

  const handleChange = (e) => { // e -> pq le va a llegar un evento al hacer una interaccion con un input
    console.log(e.target.value); //Target se usa para poder coger el valor del HTML es decir lo que se introduce
  }

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className='main-content'>
        <h2 onClick={sayHello}>Hola {user.name}</h2> 

        <Login handleLogin={login}></Login>
        
        <h2 onClick={addOne}>Number: {number}</h2> {/*Para mostrar variable */}

        <input value={myValue} placeholder={myPlaceholder} type="text" onChange={handleChange} /> {/*onChange -> para capturar y manejar cambios en el valor de un elemento de formulario */ } 
        <br />
        <br />
        <ButtomComponent></ButtomComponent>
      </main>
      
    </>
    
    
  );
}

export default App;

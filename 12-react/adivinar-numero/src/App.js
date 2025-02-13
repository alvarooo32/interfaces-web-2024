import './App.css';
import {useState} from 'react';
import Reiniciar from "./Componentes/Reiniciar"
import NumeroSecreto from "./Componentes/NumeroSecreto"
import Formulario from "./Componentes/Formulario"
import Puntuacion from './Componentes/Puntuacion';

//Diseccionamos el proyecto en componentes y los importamos aquí
function App() {
  
  //Generamos el número aleatorio para tener un número a adivinar
  const generarNumSecreto = () => {
    return Math.trunc(Math.random()*20)+1;
  }

  const reiniciar = () => {
    //Ponemos todos los valores como venían por defecto
    setNumSecreto(generarNumSecreto);
    setMensaje("Empiece a adivinar...");
    setPuntuacion(20);
    document.body.style.backgroundColor = "#222";
  }

  const comparar = (numero) => {
    if (!numero) {
      setMensaje("Introduce un número")
    } else if (Number(numero) == numSecreto) {
      setMensaje("Has ganado!")
      document.body.style.backgroundColor = "green";
      if (score < puntuacion) {
        setScore(puntuacion);
      }
    } else if (Number(numero) < numSecreto) {
      setMensaje("Demasiado bajo...");
      setPuntuacion(puntuacion - 1);
    } else {
      setMensaje("Demasiado alto...")
      setPuntuacion(puntuacion - 1)
    }
    if (puntuacion <= 0 ) {
      setMensaje("Has perdido :(");
      document.body.style.backgroundColor = "red";
      setPuntuacion(0)
    }
  }

  //Le asigno en el useState el valor random por defecto que hemos declarado en la función anterior
  const [numSecreto, setNumSecreto] = useState(generarNumSecreto);
  const [mensaje, setMensaje] = useState("Empiece a adivinar...");
  const [puntuacion, setPuntuacion] = useState(20);
  const [score, setScore] = useState(0);
  
  return (
    <div className="container">
      {/*Pasamos por parámetros las variables para después incluirlas en los componentes*/}
      <Reiniciar reiniciar={reiniciar}/>

      <h1>¡Adivina mi número!</h1>

      <NumeroSecreto/>
      <br/>
      <Formulario comparar={comparar}/>
      <Puntuacion mensaje={mensaje} puntuacion={puntuacion} score={score}/>
    </div>
  );
}

export default App;

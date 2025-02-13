import React from 'react'
import Mensaje from "./Mensaje";
import LineaPuntuacion from "./LineaPuntuacion";

export default function Puntuacion(props) {
  return (
    <div className="score-section">
        <br/>
        <Mensaje mensaje={props.mensaje}/>
        <br/>
        {/*Le pasamos parámetros y los ajustamos en LineaPuntuacion*/}
        <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero={props.puntuacion}/>
        <LineaPuntuacion etiqueta="Puntaje Alto" id="highscore" numero={props.score}/>
        <p>Puntaje Alto: <span id="highscore">{props.score}</span></p>
    </div>
  )
}

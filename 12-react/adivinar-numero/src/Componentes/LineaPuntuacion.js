import React from 'react'

//props para pasarle parámetros al componente de forma general
//También podemos definir del tirón las 3 propiedades entre {} para hacerlo más rapido en caso de que sean pocos parámetros ej: (etiqueta, id, numero)
export default function LineaPuntuacion(props) {
  return (
    <p>{props.etiqueta} <span id={props.id}>{props.numero}</span></p>
  )
}

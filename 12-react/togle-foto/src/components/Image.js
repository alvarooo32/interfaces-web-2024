import React from 'react'

export default function Image(props) {
  return (
    <img onClick={props.method} src={props.src} width={props.width}/>
  )
}

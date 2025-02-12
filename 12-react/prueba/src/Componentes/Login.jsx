import React from 'react'

export default function Login(props) {
    const user = {
        name: "Adrian",
        email: "adrian@gmail.com"
    }
    
    const handleClick = () => {
        props.handleLogin(user);
    }

  return (
    <section>
        <h2>Login section</h2>
        <button onClick={handleClick}>Login</button>
    </section>
  )
}

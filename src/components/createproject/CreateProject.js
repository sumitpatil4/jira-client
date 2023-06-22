import React, { useState } from 'react';
import Navbar from "../common/Navbar/Navbar"

export default function Project() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Project ${name} Created!`)
    }
  return (
    <>
    <Navbar/>
    <h1>Create Project</h1>
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <br/>
    <input type="submit" />
  </form>
  </>
  )
}

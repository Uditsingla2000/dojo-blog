import React from 'react'
import {useState} from "react";

export default function Home() {

  const [name,setName] = useState('mario');
  const [age,setAge] = useState(20);

  const handleClick = () => {
    setName('luigi');
    setAge(30);
  }


  return (
    <div className="Home">
      <h1>HomePage</h1>
      <p>{name} is {age} old</p>
      <button type="button" onClick={handleClick}>Click me</button>
    </div>
  )
}

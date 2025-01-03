import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const nav = useNavigate();
  nav("/")
  return (
    <div>
      home 
      
    </div>
  )
}

export default Home

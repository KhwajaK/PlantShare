import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate()

  const logout = () => {
    axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .then(res => {
        console.log(res)
        navigate('/logandReg')
})
      .catch(err => console.log(err)) 
  }

  return (
    <div id='navigation'>
        <div id='title'>
          <h2>Plant Parenthood</h2>
        </div>
        <div id="navlinks">
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/plants'>Plants</Link>
          <Link className='link' to='/mygreenhouse'>My Greenhouse</Link>
          <Link className='link' to='/logandReg'>Login/Register</Link>
          <Link className='link' to='/logout' onClick={logout}>Logout</Link>
        </div>
    </div>
  )
}

export default Navbar
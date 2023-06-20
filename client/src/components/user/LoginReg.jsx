import React,{useState} from 'react'
import Login from './Login'
import Register from './Register'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginReg = () => {
const navigate = useNavigate()
const [errors, setErrors] = useState('')
const [userLogin, setUserLogin] = useState({
  email: "",
  password: ""
})
const [registerUser, setUser] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  city: ''
})

const changeHandlerL = (e) => {
  setUserLogin({...userLogin, [e.target.name]: e.target.value})
}
const changeHandlerR = (e) => {
  setUser({...registerUser, [e.target.name]: e.target.value})
}

const loginHandler = (e) => {
  e.preventDefault()
  axios.post('http://localhost:8000/api/login', userLogin, {withCredentials: true})
    .then(res => {
      console.log(res)
      console.log('user', res.data.user);
      navigate('/mygreenhouse')})
    .catch(err => {
      console.log(err)
      console.log(err.response.data.errors);
    setErrors(err.response.data.errors)
    })
}

const registerHandler = (e) => {
  e.preventDefault()
  axios.post('http://localhost:8000/api/register', registerUser, {withCredentials: true})
      .then(res => {
          console.log(res)
          navigate('/mygreenhouse')})
      .catch(err => {
        console.log(err)
        console.log(err.response.data.errors)
      setErrors(err.response.data.errors);})
}

  return (
    <div id="LogReg">
      
      <Login changeHandlerL={changeHandlerL} loginHandler={loginHandler} errors={errors}/>
      <Register changeHandlerR={changeHandlerR} registerHandler={registerHandler} errors={errors}/>

    </div>
  )
}

export default LoginReg
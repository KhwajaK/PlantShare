import React,{useState} from 'react'

const Register = (props) => {
    const { changeHandlerR, registerHandler, errors} = props

    return (
    <div>
        <div id="register">
        <h1>Register</h1>
            <div>
            {errors ? errors.map((err, index) => <p  className ="alert-danger" key={index}>{err}</p>) : null }
            <form onSubmit={registerHandler} id="register_form">
                <label htmlFor="email"></label>
                <input type="text" id="form_decor" name="firstName" placeholder='First Name' onChange={changeHandlerR}/>
                <input type="text" id="form_decor" name="lastName" placeholder='Last Name' onChange={changeHandlerR}/>
                <input type="text" id="form_decor" name="email" placeholder="Enter Email"  onChange={changeHandlerR}/>
                <input type="password" id="form_decor" name="password" placeholder="password" onChange={changeHandlerR}/>
                <input type="password" id="form_decor" name="confirmPassword" placeholder="confirm password" onChange={changeHandlerR}/>
                <select name="city" id="form_decor" onChange={changeHandlerR}>
                    <option value="city">Select a City</option>
                    <option value="Austin"> Austin</option>
                    <option value="Boston"> Boston</option>
                    <option value="Denver"> Denver</option>
                    <option value="Las Vegas"> Las Vegas</option>
                    <option value="Los Angeles"> Los Angeles</option>
                    <option value="San Diego"> San Diego</option>
                    <option value="San Francisco"> San Francisco</option>
                    <option value="Seattle"> Seattle</option>
                    <option value="Washington DC"> Washington DC</option>
                </select>
                <input type="submit" id="form_decor" value="Register" />
            </form>
            </div>
        </div>
    </div>
    )
}

export default Register
import React, {useState} from 'react'

const Login = (props) => {
    const { changeHandlerL, loginHandler, errors} = props

    
        return (
    <div>
        <div id="login">
        <h1>Log In</h1>
        <div>
            {errors && <p className ="alert-danger">{errors}</p>}
            <form id="login_form" onSubmit={loginHandler}>
                <label htmlFor="email"></label>
                <input type="text" name="email" id="form_decor" placeholder="Email" onChange={changeHandlerL}/>
                <label htmlFor="password"></label>
                <input type="password" id="form_decor" name="password" placeholder="Password" onChange={changeHandlerL}/>
                <input type="submit" value="Log In" />
            </form>
            
            </div>
        </div>
    </div>
    )
}

export default Login
import React from 'react';

const Login=()=>{
	return(
       <>
	<div>
    <div>
    <h2>skip</h2>
            
            </div>
            <div>
    <h2>register</h2>
            
            </div>
		<h1>VYASA</h1>
        <p> Vivekanad Yoga Anusandhana Samasthana</p>

        <h2>Welcome Back!</h2>
        <p>Log in to your existant account</p>
        <div className='login-form'>
        <form>
        <div>
            <label>
               email/phone number
                {/* <Field type="text" name="username" />
            <ErrorMessage name="username" /> */}
            <input type="text" name="email" id="email/phone number"/>

            </label>
            </div>
            <div>
            <label>
                Password:
                <input type="text" name="password" id="password"/>
            </label>
            </div>
            <button type="submit">Login</button>

        </form>

        </div>
	</div></> 
	)
}

export default Login
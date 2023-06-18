import React from 'react';
import  "../assests/css/Login.css";
import  Mask from "..//assests/Mask-group.png"
import Woman from "../assests/young-woman.png"
import Meditation from "../assests/meditation.png" 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';const Login=()=>{
	return(
       <>
       <div className='login'>
	<div className='login-left'>
    {/* <div className='login-item-wrap'>
    <div className='skip-item'>
    <h6>skip</h6>
            
            </div>
            <div className='register-item'>
    <h6>register</h6>
            
            </div>
            </div> */}
            <div className='logo-content'>
            <div>
		<h1>YOGACURES</h1>
        </div>
        <p> Vivekanad Yoga <br/> Anusandhana Samasthana</p>
        </div>

        <h2>Welcome Back!</h2>
        <p className='p2'>Log in to your existant account</p>
        <div className='login-form'>
        <form>
        <div className='text1'>
            <label>
               <p>Email/Phone Number</p>
                {/* <Field type="text" name="username" />
            <ErrorMessage name="username" /> */}
            </label>
            <input type="text" name="email" id="email/phone number" placeholder='Type your email'/>
            <i className="fa-solid fa-envelope"></i>
            </div>
            <div className='text2'>
            <label>
                <p>Password: </p>   
            </label>
            <input type="password" name="password" id="password" placeholder='Password' />
            <i class="fa-solid fa-lock"></i>
            <i class="fas fa-eye"></i>
            </div>
            <button type="submit">Login</button>

            <h6 className='forgot'>Forgot Password?</h6>
            <p className='comment'> Or you can login with </p>

        </form>
        <button  className='google1' type="submit"><i class="fa-brands fa-google"></i>  Google</button>
        
        <div className='register'> Don't have you account? <b> Register Now!</b></div>

        </div>
	</div>

    {/* log in right page */}
    <div className='login-right'>
    <Carousel  >
    <div>
        <img src={Mask} alt='pic'/> 
         <div>
         <p className="legend">Legend 1</p>
         </div>
    </div>
    <figure>
        <img src={Woman} alt='pic'/>
    </figure>
    <figure>
        <img src={Meditation} alt='pic'/>
    </figure>
</Carousel>
 
 
    </div>
    
    </div>
    </> 
	)
}

export default Login
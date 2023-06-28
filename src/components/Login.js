import React, { useState } from 'react';
import "../assests/css/Login.css";
import Mask from "..//assests/Mask-group.png"
import Woman from "../assests/young-woman.png"
import Meditation from "../assests/meditation.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const route =   useNavigate() //use ko expected page pr send krne ke liye 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user="prem";
  const pass=123
  
  const handleChange = (e) => { 
   setEmail(e.target.value) //input me jab type krenge to uskig value lene ke liye 
   // console.log(e) // ye value check krne ke liye jab input me type krte hai 
   // Note: e ka name kuchh bhi ho skta hai x,y,z jo name rkhna ho ,ye bs ek argument hai.
  }
  const handleChangePassword = (e) => { 
    setPassword(e.target.value) //input me jab type krenge to uskig value lene ke liye 
    // console.log(e) // ye value check krne ke liye jab input me type krte hai 
    // Note: e ka name kuchh bhi ho skta hai x,y,z jo name rkhna ho ,ye bs ek argument hai.
  }

  const handleSubmit = () => {
    if(email == user && password == pass) { //we are checking current user / mtlab agr user pass same hoga tohi login hoga
        route("/dashboard") // login ke baad jis bhi page pr send krna to ye use krna hai
    } else {
         alert("user or password wrong")
    }
  }

//   console.log(email,"email")
//   console.log(password,"password")


    return (
        <>
            <div className='login'>
                <div className='login-left'>

                    <div className='logo-content'>
                        <div>
                            <h1>YOGACURES</h1>
                        </div>
                        <p> Vivekanad Yoga <br /> Anusandhana Samasthana</p>
                    </div>

                    <h2>Welcome Back!</h2>
                    <p className='p2'>Log in to your existant account</p>
                    <div className='login-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='text1'>
                                <label>
                                    <p>Email/Phone Number</p>
                                </label>
                                <input required onChange={handleChange} type="text" value={email} name="email" id="email/phone number" placeholder='Type your email' />
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className='text2'>
                                <label>
                                    <p>Password: </p>
                                </label>
                                <input required onChange={handleChangePassword} value={password}  type="password" name="password" id="password" placeholder='Password' />
                                <i class="fa-solid fa-lock"></i>
                                <i class="fas fa-eye"></i>
                            </div>
                            <input className="submit" type='submit' value="Login"/>
                            {/* <button  onClick={handleSubmit}>Login</button> */}

                            <h6 className='forgot'>Forgot Password?</h6>
                            <p className='comment'> Or you can login with </p>

                        </form>
                        <button className='google1' type="submit"><i class="fa-brands fa-google"></i>  Google</button>

                        <div className='register'> Don't have you account? <b> Register Now!</b></div>

                    </div>
                </div>

                {/* log in right page */}
                <div className='login-right'>
                    <Carousel className='cara'
                        autoPlay={true}
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        // showIndicators={false}
                        swipeable={true}
                        transitionTime={1000}>
                        <div className='item'>
                            <img src={Mask} alt='pic' />
                            <div className="legend">
                                <h1>Transform Your Lifestyle, Achieve True Healing : <br />
                                    It's More Than Just Medication  </h1>
                                <p>True healing involves more than just medicating symptoms - it requires modifying <br /> your lifestyle, including your diet and exercise habits, to fully address the underlying <br /> ailment.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={Woman} alt='pic' />
                            <div className="legend">
                                <h1>Transform Your Lifestyle, Achieve True Healing : <br />
                                    It's More Than Just Medication  </h1>
                                <p>True healing involves more than just medicating symptoms - it requires modifying <br /> your lifestyle, including your diet and exercise habits, to fully address the underlying <br /> ailment.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={Meditation} alt='pic' />
                            <div className="legend">
                                <h1>Transform Your Lifestyle, Achieve True Healing : <br />
                                    It's More Than Just Medication  </h1>
                                <p>True healing involves more than just medicating symptoms - it requires modifying <br /> your lifestyle, including your diet and exercise habits, to fully address the underlying <br /> ailment.</p>
                            </div>
                        </div>

                    </Carousel>


                </div>

            </div>
        </>
    )
}

export default Login
import React from "react";
import { Link } from 'react-router-dom';
import   "../../assests/css/Header.css";

const Header = () => {
    return (
        <>
        
            <div className="header">
           
            <div className='logo'>
                        <div>
                            <h1>YOGA<span>CURES</span></h1>
                        
                        </div>
                        <p> Transform with Yoga Therapy </p>
                    </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                    <li>
                        <Link to="/blogs"> Blogs </Link>
                    </li>
                    <li><Link to="/videos"> videos </Link>
                    </li>
                    <li>
                    <button className="sign-up">
                        <Link to="/signup"> SignUp </Link>
                        </button>
                    </li>
                    <li>
                    <button className="log-in">
                        <Link to="/"> Login </Link>
                        </button>
                    </li>

                </ul>
                </nav>
            
            </div>
        </>
    )
}

export default Header






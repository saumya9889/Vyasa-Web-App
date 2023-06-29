import React, { useState } from "react";
import "../../assests/css/Appointment.css";


const Appointment = () => {

    const [activeButton, setActiveButton] = useState("");

    const handleClick = (event) => {
        // console.log(event.target.id,"evernt")
        setActiveButton(event.target.id);
    };

    // console.log(activeButton,"activeButton")
 


    return (
        <>
            <div className="appoint-wrap" id="appoint-wrap">
                <div className="appoint-container">
                    <div className="book-heading">
                        <h1> Book an <span>Appointment</span></h1>
                    </div>

                    <ul>
                        <li id="button1"
                            className={activeButton === 'button1' ? 'btn active' : 'btn'}
                            onClick={handleClick}>
                            Yoga Treatment
                        </li>
                        <li id="button2"
                            className={activeButton === 'button2' ? 'btn active' : 'btn'}
                            onClick={handleClick} >
                            Consulation
                        </li>
                        <li id="button3" 
                         className={activeButton === 'button3' ? 'btn active' : 'btn'}
                            onClick={handleClick}> 
                            Guided Yoga </li>

                    </ul>
                    <form>dcdvdff</form>

                </div>
            </div>

        </>
    )
}

export default Appointment;
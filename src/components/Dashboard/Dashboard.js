import React from "react";
import Header from "../Dashboard/Header"
import Banner from "../Dashboard/Banner"
import Appointment from "../Dashboard/Appointment";
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";



const Dashboard = ({authorized}) => {
    // console.log(authorized,"s")
    // const navigate = useNavigate();
    // if(!authorized){
    //     return navigate("/");
    // }
    return (
        <>
        <Header/>
        <Banner/>
        <Appointment/>
      
      {/* <Link to="/">login</Link> */}
        </>
    )
}

export default Dashboard
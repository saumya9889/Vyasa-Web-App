import React from "react";
import Header from "../Dashboard/Header"
import Banner from "../Dashboard/Banner"
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
      
      {/* <Link to="/">login</Link> */}
        </>
    )
}

export default Dashboard
import React from "react";
import   "../../assests/css/Banner.css";
import BannerSrc from "../../assests/young-adult1.png"


const Banner = () => {
    return (
        <>
            <div className="banner">
            <figure>
                <img  src={BannerSrc} alt="banner"/>
            </figure>
            <div className="main-banner-content-wrapper">
                <h1 className="banner-heading">
                    Cure your Medical Condition <br/>
                    with Food, Diet & Yoga with <br/>
                    <span>YOGACures</span>
                </h1>
                <p>
                    At YogaCures, we believe that true healing comes from addressing the <br/> 
                    whole person - mind, body, and spirit. That's why we offer a unique <br/>
                     combination of food, diet, and yoga therapy that can help you cure your <br/>
                      medical condition and transform your health.
                </p>
                <button className="know-more"> Know More </button> 
            </div>
          
            </div>
        </>
    )
}



export default Banner;
import React from "react";
import '../styles/header.scss';
import '../styles/style.scss';



const Header = () => {
    return (
        <div className="Header">
            <header >
                
            </header>


            <div class="slides">

                <div className="slide">
                    <img src="https://i.pinimg.com/564x/67/a5/30/67a5308ca8e67dea84d833728276c84d.jpg" alt="" class="slide-image" />
                </div>
                <div className="slide slide-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZlmOk3Wnfv1Dkmrg9YJ2qRfddD6sA7OTh-OYJxT6qrbcy360H5CctTHYJw0k-KEFnB8&usqp=CAU.jpg" alt="" className="slide-image" />
                </div>
                <div className="slide slide-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywUGe9gN649b2vKngdujyoamn37JwdB5sAg&usqp=CAU.jpg" alt="" className="slide-image" />
                </div>
                <div className="slide slide-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR76Npy9L4l2vLWjD7qG6_5MBvTA7ZjAsqAQ&usqp=CAU.jpg" alt="" className="slide-image" />
                </div>

            </div>

            <div className="slidesp">
                <p>Este Es un Pequeño Proyecto universitario, para promover la automatizacion para el control de humedad y riego,
                    de manera facil y accesible para todos los pequeños agricultores de colombia.</p>
            </div>

        </div>


    );
}

export default Header;
import React from "react";
import '../styles/header.scss';
import '../styles/style.scss';



const Header = () => {
    return (
        <div className="Header">
            <header >
                <img src="https://pbs.twimg.com/media/FcFRc39WYAEUqB0?format=png&name=small" alt="logo-image" />
                <div className="hedear-title-container">
                    <center><h1>La próxima Revolución en el monitoreo y control de humedad </h1></center>
                    <p>Te ayuda a controlar los diferentes cambios de humedad de tu cultivo</p>
                </div>
            </header>


            <div class="slides">
                
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/67/a5/30/67a5308ca8e67dea84d833728276c84d.jpg" alt="" class="slide-image" /> 
                </div>
                
                
            </div>

             <p>Este Es un Pequeño Proyecto universitario, para promover la automatizacion para el control de humedad y riego, 
                de manera facil y accesible para todos los pequeños agricultores de colombia.</p>   


        </div>


    );
}

export default Header;
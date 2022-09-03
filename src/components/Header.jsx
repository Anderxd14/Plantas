import React from "react";
import '../styles/header.scss';


const Header = () => {
    return (
     <div className="Header">
        <header >
        <img src="" alt="logo"/>
        <div className="hedear-title-container">
            <h1>La próxima Revolución en el monitoreo y control de humedad </h1>
            <p>te ayuda a controlar los diferentes cambios de humedad de tu cultivo</p>
        </div>
    </header>
    
        <div className ="container-home-img">
            <img src="https://i.pinimg.com/564x/67/a5/30/67a5308ca8e67dea84d833728276c84d.jpg" alt="Imagen de huerto casero"/>
            <p>
                Este Es un Pequedo Proyecto universitario, para promover la automatizacion para el control de humedad y riego, 
                de manera facil y accesible para todos los pequeños agricultores de colombia.
            </p>
        </div>

      
    </div>


    );
}

export default Header;
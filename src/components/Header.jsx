import React from "react";
import '../styles/header.scss';
import '../styles/style.css';



const Header = () => {
    return (
     <div className="Header">
        <header >
        <img src="https://www.hogarmania.com/archivos/201606/huertos-en-pequenos-espacios-668x400x80xX.jpg" alt="logo-image" />
        <div className="hedear-title-container">
             <center><h1>La próxima Revolución en el monitoreo y control de humedad </h1></center>
            <p>Te ayuda a controlar los diferentes cambios de humedad de tu cultivo</p>
        </div>
 </header>
    <div class="slides">
        <h1>
            <strong> <center>  Este Es un Pequeño Proyecto universitario, para promover la automatizacion para el control de humedad y riego, 
                de manera facil y accesible para todos los pequeños agricultores de colombia. </center> </strong> <hr></hr>
        </h1>
        <div class="slide"><br></br> <br></br> <br></br> <br></br> 
            <center> <img src="https://i.pinimg.com/564x/67/a5/30/67a5308ca8e67dea84d833728276c84d.jpg" alt="" class="slide-image"/> </center>
        </div>
        <div class="slide slide-2"><br></br> <br></br> <br></br> <br></br> 
            <center> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZlmOk3Wnfv1Dkmrg9YJ2qRfddD6sA7OTh-OYJxT6qrbcy360H5CctTHYJw0k-KEFnB8&usqp=CAU.jpg" alt="" class="slide-image"/> </center>
        </div>
        <div class="slide slide-3"><br></br> <br></br> <br></br> <br></br> 
            <center> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywUGe9gN649b2vKngdujyoamn37JwdB5sAg&usqp=CAU.jpg" alt="" class="slide-image"/> </center>
        </div>
        <div class="slide slide-4"><br></br> <br></br> <br></br> <br></br> 
            <center> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR76Npy9L4l2vLWjD7qG6_5MBvTA7ZjAsqAQ&usqp=CAU.jpg" alt="" class="slide-image"/> </center>
        </div>
           
    </div>

      
    </div>


    );
}

export default Header;
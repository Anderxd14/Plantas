import React from "react";
import "../styles/perfil.scss"
import "../styles/busqueda.scss"
import "../styles/muestra.scss"


const Perfil = () => {
    return (
        <div className="Perfil">
            <div className="Dashboard-der">
                menu derecha
                <form class="busqueda">
                    <input type="text" placeholder="Buscar..." class="input" />
                    <button type="submit" class="button">
                    </button>
                </form>


                <div className="container">
                    <article class="card">
                        <h4 class="card_title" >Instagram </h4>
                    </article>
                    <div class="card">
                        <h4 class="card_title" >Facebook </h4>
                    </div>
                    <article class="card">
                        <h4 class="card_title" >Yolo </h4>
                    </article>
                </div>
                <div className="Dashboard-iz">
                    menu izquierda
                </div>
            </div>
        </div>
    );
}

export default Perfil;
import { useState, useRef } from "react";
import './Inicio.css';

function Inicio(props) {


    const onSing = (e) => {
        e.preventDefault();
        
        props.setIndex(
            {

                "index": false,
            }
        )
    }

    return (

    <div>

            <div class="header">
                <h1>Menu inicio prueba5</h1>
                <p>Web de seguridad</p>
                <div class="hacker">
                        <img src="assets/hacker.png" alt="description of image"></img>
                </div>
                <button className="main-btn" onClick={e => onSing(e)}>Ingresar</button>


            </div>

            <div className="login-main">     
                <h1>Proyecto de Redes en los negocios</h1>
            </div>

    </div>
    )


}

export default Inicio;
import React from "react";


function Encabezado2(props) {
    var valor = localStorage.getItem("name");

    return (  
        <header>
            <div id="SpaceBetween">
                <img id="Logoplay" src="LogoBlanco.png" alt="Logo Blanco"/>  
                <h2 id="Tituloplay">Matefy</h2>
                <div id="Usuario">{valor}</div>
            </div>
        </header>
    )   
}      
export default Encabezado2;
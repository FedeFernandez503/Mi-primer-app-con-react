import React from "react";

function CuerpoNoLogin(props) {
    return (
        <main id="NoLogin">      
            <img id="Candado" src="image 1.png" alt="Candado Grande"/> 
            <div id="CuadroDeTexto">   
                <h1 id="Error">Mmm... algo no salió bien</h1>
                <p>Debes estar autenticado para acceder a esta página</p>
            </div>
        </main>    
    )
    
}

export default CuerpoNoLogin;
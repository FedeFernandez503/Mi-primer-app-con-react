import React from "react";

import Input from "./Formulario/Formulario";

function CuerpoLogin() {
    
    return (
        <main>      
            <img id="candado" src="image 1.png" alt="Candado Chico"/>    
            <h1>Ingresar</h1>
            <div id="formulario">
               
                    <Input />
                    
                    
            </div>
            
            <h5>¿HAS OLVIDADO LA CONTRASEÑA?</h5>
            <hr/>
            <h4>¿NO TIENES CUENTA?</h4>
            <button id="registro" type="submit" >REGISTRATE</button>
        </main>    
    )
    
}

export default CuerpoLogin;
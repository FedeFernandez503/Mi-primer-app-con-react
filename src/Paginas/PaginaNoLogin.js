import "./Pagina.css";

import Encabezado from "../Componentes/Pagina/Encabezado/Encabezado";
import CuerpoNoLogin from "../Componentes/Pagina/Cuerpo/CuerpoNoLogin";


 

function NoLogin(props) {
    return (
        <div id="pagina">
            <Encabezado />
            <CuerpoNoLogin/>
        </div>
    )
    
}

export default NoLogin;

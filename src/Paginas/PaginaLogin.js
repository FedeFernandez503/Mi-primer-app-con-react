
import "./Pagina.css";
import Encabezado from "../Componentes/Pagina/Encabezado/Encabezado";
import CuerpoLogin from "../Componentes/Pagina/Cuerpo/CuerpoLogin";
/*import CuerpoNoLogin from "../Componentes/Pagina/Cuerpo/CuerpoNoLogin";*/



  /*<Encabezado />*/
/*<CuerpoNoLogin tarjeta={tarjeta1} menu={menu1}/>*/

function Login(props) {
    return (
        <div id="pagina">
            <Encabezado />
            <CuerpoLogin/>
        </div>
    )
    
}

export default Login;

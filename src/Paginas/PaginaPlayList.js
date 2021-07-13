import "./Pagina.css";

import Encabezado2 from "../Componentes/Pagina/Encabezado/EncabezadoPlayList";
import Cuerpo from "../Componentes/Pagina/Cuerpo/Cuerpo";

const menu1 = {
    Nombre1: 'Nombre',  
    Nombre2: 'Artista',  
    Nombre3: 'Álbum',  
    Nombre4: 'Duración', 
    Nombre5: 'Agregar', 
    Nombre6: 'Cant. Votos', 
    Nombre7: 'Votar',
  }

  const tarjeta1 = {
    titulo1: 'Resultados',  
    titulo2: 'Tu Playlist',  
  }

  

function PlayList(props) {
    return (
        <div id="pagina">
            <Encabezado2 />
            <Cuerpo tarjeta={tarjeta1} menu={menu1}/>
        </div>
    )
    
}

export default PlayList;

import React from "react";
import Lista from "./ListaCanciones/ListaCanciones";

function Cuerpo(props) {
    return (
        <div id="ContenedorPlayList">
            <div id="Busqueda"> 
                <button id="BotonBuscador"><img id="IconoBuscador" src="Vector.png" alt="IconoBuscador"/></button>
                <input id="Buscador" type="search" placeholder="Buscar" />
            </div>
            <main id="Resultados">
            <span>{props.tarjeta.titulo1}</span>
                <div id="Menu">
                    <h6 className="categorias">{props.menu.Nombre1}</h6>
                    <h6 className="categorias">{props.menu.Nombre2}</h6>
                    <h6 className="categorias">{props.menu.Nombre3}</h6>
                    <h6 className="categorias">{props.menu.Nombre4}</h6>
                    <h6 className="categorias">{props.menu.Nombre5}</h6>
                </div>
                <div id="cancionesBuscadas">
                        
                    </div>
            </main>
            <main id="TuPlayList">
            <span>{props.tarjeta.titulo2}</span>
            <div id="Menu2">
                    <h6 className="categorias">{props.menu.Nombre1}</h6>
                    <h6 className="categorias">{props.menu.Nombre2}</h6>
                    <h6 className="categorias">{props.menu.Nombre4}</h6>
                    <h6 className="categorias">{props.menu.Nombre6}</h6>
                    <h6 className="categorias">{props.menu.Nombre7}</h6>
                </div>
                <div id="ListaDeCanciones">
                    <Lista />
                </div>
            </main>
        </div>    
    )
    
}

export default Cuerpo;
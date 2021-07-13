import React, { useState} from "react";


const Lista = () => {
    const [list, setList] = useState([
        { id: 1, imagen: 'image.png', nombre: 'A las nueve', artista: 'NTVG', duracion: '3:24', CantVotos: 4, MeGusta:'MeGusta.png', NoMeGusta:'NoMeGusta.png'},
        { id: 2, imagen: 'image2.png', nombre: 'Maldición', artista: 'Once Tiros', duracion: '3:04', CantVotos: 3, MeGusta:'MeGusta.png', NoMeGusta:'NoMeGusta.png'},
        { id: 3, imagen: 'image3.png', nombre: 'Canción para Uno', artista: 'La Vela Puerca', duracion: '2:53', CantVotos: 2, MeGusta:'MeGusta.png', NoMeGusta:'NoMeGusta.png'},
        { id: 4, imagen: 'image2.png', nombre: 'Mi Revolución', artista: 'Cuatro Pesos de Propina', duracion: '3:24', CantVotos: 1, MeGusta:'MeGusta.png', NoMeGusta:'NoMeGusta.png'},
        { id: 5, imagen: 'image3.png', nombre: 'Lo más simple de las cosas', artista: 'Hereford', duracion: '3:17', CantVotos: 0, MeGusta:'MeGusta.png', NoMeGusta:'NoMeGusta.png'},
      ])
      const ActualizarCantVotos = (param) => {
        const CompararId = list.map(listas => (
          listas.id === param.id 
          ? param 
          : listas
        ))
        setList(CompararId)
        
      }
    
    
      const sortedList = [...list].sort((a, b) => (a.CantVotos < b.CantVotos ? 1 : a.CantVotos > b.CantVotos ? -1 : 0))
    
    return (
        
        <ul>
            {sortedList.map(listas => (
            <li>
                <div id="ContenedorInfo"><img id="medidas" src={listas.imagen} alt="foto"/> <p className="DatosDeLaCancion">{listas.nombre}</p></div> <div id="ContenedorInfo">{listas.artista}</div> <div id="ContenedorInfo">{listas.duracion}</div> <div id="ContenedorInfo">{listas.CantVotos}</div> 
                <div id="ContenedorInfo">
                    <button onClick={() => ActualizarCantVotos ({id: listas.id,imagen: listas.imagen, nombre: listas.nombre,
               artista: listas.artista, duracion: listas.duracion, CantVotos: listas.CantVotos +1, MeGusta: listas.MeGusta, NoMeGusta: listas.NoMeGusta,  })} className="Votar"><img id="chica" src={listas.MeGusta} alt="foto"/></button> 
                    <button onClick={() => ActualizarCantVotos ({id: listas.id,imagen: listas.imagen, nombre: listas.nombre,
               artista: listas.artista, duracion: listas.duracion, CantVotos: listas.CantVotos -1, MeGusta: listas.MeGusta, NoMeGusta: listas.NoMeGusta,  })} className="Votar"><img id="chica" src={listas.NoMeGusta} alt="foto"/></button>
                </div> 
            </li>
            ))}
        </ul>
    )
    
}
    
export default Lista;
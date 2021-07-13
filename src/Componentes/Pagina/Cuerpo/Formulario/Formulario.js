import { useHistory } from "react-router-dom";
import React, {useState} from "react";


function Input() {

    const[state, setState] = useState ({
        
      errormessage: '',
      errormessage2: ''
    })
    
    
    let history = useHistory();
    

  
    

  const myChangeHandler = (event) => {
    
    let val = document.getElementById("password").value;
    let err = '';
    
      if (val ==="" || val.length < 6) {
        err = <strong>Ingrese una contraseña de almenos 6 caracteres</strong>;
      }
    
setState({errormessage: err});

  }
  const myChangeHandler2 = (event) => {
    
    let val2 = document.getElementById("name").value;
    let err2 = '';
    
      if (val2 ==="" || val2.length < 4 || val2.length > 10) {
        err2 = <strong>Ingrese un usuario de almenos 4 caracteres y no mas de 10</strong>;
      }
    
setState({errormessage2: err2});

  }
   const mySubmitHandler = (e, history) => {
    let val = document.getElementById("password").value;
    let val2 = document.getElementById("name").value;
    
    
    
      if (val.length < 6 || val2.length < 4 || val2.length > 10) {
        history.push("/NoLogin")
        e.preventDefault();
      } else{
          localStorage.setItem('name', document.getElementById('name').value);
          history.push("/PlayList")
          e.preventDefault();
      }        
  }
  

    
    return (
      <form>
      
      
      <input
        id='name'
        type='text'
        name='username'
        placeholder='Usuario'
        onChange={(event) => myChangeHandler2(event)}
      />
      {state.errormessage2}
      <input
        id='password'
        type='password'
        name='contraseña'
        placeholder='Contraseña'
        onChange={(event) => myChangeHandler(event)}
      />
      {state.errormessage}
      <button id="Login" onClick={(e) => mySubmitHandler(e, history)}>
            <h3>COMENZAR A CREAR PLAYLISTS</h3></button>
      </form>
    );
  }


export default Input;
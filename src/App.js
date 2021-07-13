
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from  "./Paginas/PaginaLogin";
import NoLogin from "./Paginas/PaginaNoLogin";
import PlayList from "./Paginas/PaginaPlayList";


function App() {
  
  return (
    <Router>
      <Switch>
      <div className="App">
       <Route exact path="/Login" component={Login}/>
       <Route exact path="/NoLogin" component={NoLogin}/>
       <Route exact path="/PlayList" component={PlayList}/>
      </div>
      </Switch>
    </Router>
  );
}

export default App;


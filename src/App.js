
import React from "react";
import Login from './login/Login';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const NoPage = () => {
  return <h1>404</h1>;
};


function App() {
  return (
<div className="App">
  <Router>

    
     <Switch>
      <Route path="*/blockme" element={<NoPage />}>
        <h1>Bloqueado</h1>   
       
      </Route>
      
      
      <Route path="/">
        
        <Login></Login>
        
  
      </Route>
      </Switch>
        
      
      
    
  </Router>
</div>
  );
}




export default App;

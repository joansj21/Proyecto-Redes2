
import React from "react";
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
    
  <Router>
    <div>
      <h1>Prueba</h1>
    </div>
    <Switch>
    <Route path="*/blockme" element={<NoPage />}>
    <h1>Bloqueado</h1>     
  
      </Route>
      
      <Route path="/login">
        <h1>
          <h1>login</h1>
        </h1>
  
      </Route>
    </Switch>
        
   
  </Router>
  );
}




export default App;

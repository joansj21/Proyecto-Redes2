
import React from "react";
import Login from './login/Login';
import './App.css';

import axios from 'axios'
import {useState,useEffect} from 'react'

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
  ///////////////////////
//ipblock

//creating IP state
const [ip, setIP] = useState('');
const [ipBlock, setIpBlock] = useState([]);
const [blockRefresh, setBlockRefrehs] = useState({
  "block":false


})


//creating function to load ip address from the API
const getData = async () => {
  const res = await axios.get('https://geolocation-db.com/json/')
  console.log(res.data);
  setIP(res.data.IPv4)
}

useEffect( () => {
  //passing getData method to the lifecycle method
  getData()

}, [])




useEffect(() => {

  if(blockRefresh.block===false){
let url = 'https://g5ab0d028fce44a-proyecto.adb.us-phoenix-1.oraclecloudapps.com/ords/proyecto/proyecto/ipBlock/'
const requestOptions = {
    method: 'get',
    headers: {'Content-Type': 'application/json' },

};

fetch(url, requestOptions)
.then(async response => {
  const data = await response.json();
     
  return data;

})
.then(data => {
  setIpBlock(data.items);
  
})

setBlockRefrehs({
  "block":true
})


  
}


})


const onBlock = (e) => {
  e.preventDefault();



  let url = 'https://g5ab0d028fce44a-proyecto.adb.us-phoenix-1.oraclecloudapps.com/ords/proyecto/proyecto/ipBlock/'
  const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
          "ip":ip,
          "descrip":"Bloquedo en la pagina del grupo F ",

      })
  };

  fetch(url, requestOptions)
  .then(async response => {
    if (response.ok) {
      
      return response.json();
      
  }else{
      

  }
  })
  setIpBlock({
    ...blockRefresh,
    "block":false
})



} 

const isBlock = () => {

for (let index=0; index<ipBlock.length; index++){
  console.log(ipBlock[index].ip)
  if(ipBlock[index].ip===ip){
    return true

  }
}

return false


}
//////////////////////
  
  
  return (
<div className="App">
  <Router>


  {isBlock() &&
      <div>
      {ipBlock.map(ipBlocker => <p key={ipBlocker.ip}>IP: {ipBlocker.ip}     Descripcion: {ipBlocker.descrip}</p>)}
      <p>Si estas bloqueado</p>
      </div>
      }

    {!isBlock() &&
      <div>
           <Switch>
      <Route path="*/blockme" element={<NoPage />}>
        <h1>Bloqueado</h1>   
       
      </Route>
      
      
      <Route path="/">
        
        <Login></Login>
        
  
      </Route>
      </Switch>

      <div className="session">
                < button className="session-btn" onClick={e => onBlock(e)} >Bloquearme</button>
         </div>

      </div>

      

      }
    

        
      
      
    
  </Router>
</div>
  );
}




export default App;

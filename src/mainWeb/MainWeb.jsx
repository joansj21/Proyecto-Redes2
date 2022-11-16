import { useState, useRef } from "react";
import Register from '../registerAdmin/Register';
import './main.css';
function MainWeb(props) {

    const [register, setRegister] = useState({
        "register": false,
        "message": "",
       
    });

    const outWeb = (e) => {
        e.preventDefault();

        props.setUser({
            "user":"",
            "password":"",
            "name":"",
            "type":""
            })
       
       
        }


        const registerAdmin = (e) => {
            e.preventDefault();
    
            setRegister({
                "register": true,
                "message": "",
                })
           
           
            }

    return(

        <div>
            
            
        
        {props.user.type==='0'&&<div className="field-group-login">
            <h3>Pagina Principal</h3>
            
            <div className="field-group-main">
            <p>Bienvenido a la pagina {props.user.name}</p>
            </div>
            <div>
            <img src="assets/user.png" alt="description of image"></img>
            </div>

            
        </div>}


        {props.user.type==='1'&& <div className="field-group-login">
            <h3>Pagina Principal de administrador</h3>
            <div className="field-group-main">
            <p>Bienvenido a la pagina {props.user.name}</p>
            </div>

            
            
            {!register.register &&<div className="field-group-login">
            < button className="main-btn" onClick={e => registerAdmin(e)} >Registrar Administrador</button>
            </div>
            }
            {register.register &&
            
            <Register register={register} setRegister={setRegister}></Register>
            
            
            }

            <div className="error-lbl">
            <p> {register.message}</p>
            </div>

            
            <div>
            <img src="assets/Among.png" alt="description of image"></img>
            </div>
            
        </div>
        
        
        
        }

        <div className="session">
                < button className="session-btn" onClick={e => outWeb(e)} >Salir</button>
        </div>

           

        </div>
        
        


        
    )
}

export default MainWeb;

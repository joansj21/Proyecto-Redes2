import { useState, useRef } from "react";
import Register from '../register/Register';
import './Login.css';


function Login() {
   
    const nameRef = useRef(null);
    const passRef = useRef(null);
    
    const [client, setClient] = useState({
        "user": "",
        "password": "",
       
    });

    const [register, setRegister] = useState({
        "register": false,
        "message": "",
       
    });
    

      const onLogin = (e) => {
        e.preventDefault();
        
        setClient({
            "user": nameRef.current.value,
            "password": passRef.current.value,
     
        });

    }

    const onRegister = (e) => {
        e.preventDefault();

        setRegister({
            "register": true,
            "message": "",
     
        });
        
 

    }
    

    
    

    return (
        <div>
            <h3>Pagina AntiAtaques</h3>

            {!client.user && !register.register &&
                
                <div className="login-main">
                    <h3>Ingresar</h3>
                        <div className="field-group-login">
                            <label htmlFor="name">Usuario</label>
                            <input ref={nameRef} type="text" name="name" id="name"/>

                            <label htmlFor="pass">Contraseña</label>
                             <input ref={passRef} type="text" name="pass" id="pass"/>

 
                      
                         </div>
                        <button className="main-btn" onClick={e => onLogin(e)}>Entrar</button>

                        <button className="main-btn" onClick={e => onRegister(e)}>Crear cuenta</button>

                        <div className="">
                    
                        </div>


                </div>

                
                
                    
                   

               

                
                }

               
                {register.register &&
                
                    <Register register={register} setRegister={setRegister}></Register>
                    
               
                 }


                

                     {client.user &&
                          <div className="session">
                    
                          </div>
                      }

           

                </div>
    )
}

export default Login;
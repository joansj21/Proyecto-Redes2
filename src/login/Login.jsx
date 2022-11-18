import { useState, useRef } from "react";
import Register from '../register/Register';
import MainWeb from '../mainWeb/MainWeb';
import './Login.css';


function Login(props) {
   
    const nameRef = useRef(null);
    const passRef = useRef(null);
    
    const [client, setClient] = useState({
        "user": "",
        "password": "",
        "name":"",
        "type":""
       
    });

    const [register, setRegister] = useState({
        "register": false,
        "message": "",
       
    });

    const onIndex = (e) => {
        e.preventDefault();
        
        props.setIndex(
            {

                "index": true,
            }
        )


        setClient({

            ...client,
            "user":"",
            "name":"",
            "type":""


        })
    }
    

      const onLogin = (e) => {
        e.preventDefault();
        
     


        let url = 'https://www.grupof.meseguercr.com/login/'+nameRef.current.value+'/'+passRef.current.value+'/end'

        
        
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                "userName":nameRef.current.value,
                "password":passRef.current.value
            })
        };
        fetch(url, requestOptions)
            .then(async response => {
                const data = await response.json();

                

                if (data.ingreso==='1') {
                    
                    setClient({

                        ...client,
                        "user":nameRef.current.value,
                        "name":data.name,
                        "type":data.type


                    })

                    setRegister({
                        ...register,
                        "register": false,
                        "message": "",
                    })
                   
                    return data;
                    
                }else{
                    
                    setRegister({
                        ...register,
                        "register": false,
                        "message": "Credenciales no coinciden",
                    })
                }
                const errorData = await response.json();
                return Promise.reject(errorData);
            }
            
            )

            





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
            <h3>Pagina AntiAtaques2</h3>

            {!client.user && !register.register &&
                
                <div className="login-main">
                    <h3>Ingresar</h3>
                        <div className="field-group-login">
                            <label htmlFor="name">Usuario</label>
                            <input ref={nameRef} type="text" name="name" id="name"/>

                            <label htmlFor="pass">Contraseña</label>
                             <input ref={passRef} type="password" name="pass" id="pass"/>

 
                      
                         </div>
                        <button className="main-btn" onClick={e => onLogin(e)}>Entrar</button>

                        <button className="main-btn" onClick={e => onRegister(e)}>Crear cuenta</button>

                        <div className="session">
                             < button className="session-btn" onClick={e => onIndex(e)} >Salir</button>
                        </div>


                        



                </div>

                
                
                    
                   

               

                
                }

               
                {register.register &&
                
                    <Register register={register} setRegister={setRegister}></Register>
                    
               
                 }

                {register.message &&
                    <div className="error-lbl">
                     <p>{register.message}</p>
                     </div>}


                

                     {client.user &&
                          <div>
                            
                        <MainWeb user={client} setUser={setClient}></MainWeb>
                    
                          </div>
                      }

           

                </div>
    )
}

export default Login;
import { useState, useRef } from "react";
import './Register.css';



function Register(props) {

    const nameRef = useRef(null);
    const userRef = useRef(null);
    const passRef = useRef(null);
    const mailRef = useRef(null);

    const [client, setClient] = useState({
        "name":"",
        "user": "",
        "password": "",
        "mail":""
       
    });
    

    const onRegister = (e) => {
        e.preventDefault();
        
        setClient({
            "name":nameRef.current.value,
            "user": userRef.current.value,
            "password": passRef.current.value,
            "mail":mailRef.current.value
     
        });

        props.setRegister({
            ...props.player,
            "register": false,
            "message": "",
        })

    }

    const outRegister = (e) => {
        e.preventDefault();
        props.setRegister({
            ...props.player,
            "register": false,
            "message": "",
        })
        }

   
    return(

        <div className="register-main">
            <h3>Registrar</h3>
        
            <div className="field-group-register">
                <label htmlFor="name">nombre</label>
                <input ref={nameRef} type="text" name="name" id="name"/>

                 <label htmlFor="user">nombre de usuario</label>
                <input ref={userRef} type="text" name="pass" id="pass"/>


                <label htmlFor="pass">Contraseña</label>
                <input ref={passRef} type="text" name="pass" id="pass"/>

                <label htmlFor="mail">Correo</label>
                <input ref={mailRef} type="text" name="name" id="name"/>


          
            </div>
            <button className="main-btn" onClick={e => onRegister(e)}>Registrar</button>

            <div className="session">
                < button className="session-btn" onClick={e => outRegister(e)} >Salir</button>
            </div>

        </div>
        


        
    )
}

export default Register;
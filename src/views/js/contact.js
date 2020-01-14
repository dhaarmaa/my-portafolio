import React from 'react';
import '../css/contac.css';
import Navigation from '../../components/Navigation';

function Contact(){
    return(
        <div className="container-contact">
            <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME" contact="CONTACTAME" curriculum="CV"/>
            <div className="headline">
                <h1>CONTACTAME</h1>
            </div>
            <div className="text-contact">
                <p>Si quieres contactarme puedes hacerlo atraves de estos medios</p>
            </div>
            <div className="btn-contact">
            {/* <a href="index.html"><img src="image.png"/></a> */}
            {/* <a><img src="gmail.jpg"/></a> */}
            <p>Correo:dharma.herrera@gmail.com</p>
            <p>N° telefonico: +56966187699</p>
            </div>
            <div className="text-contact">
                <p>o puedes hacerlo por estas redes</p>
            </div>
            
        </div>
    )
}

export default Contact;
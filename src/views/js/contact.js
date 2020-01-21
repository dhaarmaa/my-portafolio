import React from 'react';
import '../css/style.css';

import Navigation from '../../components/Navigation';

function Contact(){
    return(
        <div className="container">
            <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME" contact="CONTACTAME" curriculum="CV"/>

            <div className="headline">
                <h1>CONTACTAME</h1>
            </div>
            <div className="content">
                <div className="text-contact">
                    <div className="teext">
                        <p>Si quieres contactarme, puedes hacerlo atraves de este medio</p>
                    </div>
                    <div className="btn-contact">
                        
                        <p><i class="far fa-envelope"></i>Correo:dharma.herrera@gmail.com</p>
                    </div>
                    <div className="teext">
                        <p>o puedes hacerlo por estas redes:</p>
                        <div className="btnsocial">
                          
                            <a href="https://www.linkedin.com/in/dharmaherrera/"><i class="fab fa-linkedin"></i>Linkedin</a>
                            <span/>
                            <a href="https://github.com/dhaarmaa"><i class="fab fa-github"></i>GitHub</a>
                        </div>
                    </div>
                </div>

            </div>   
        </div>
    )
}

export default Contact;
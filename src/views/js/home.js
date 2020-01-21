import React from 'react';
import '../css/style.css';

import Navigation from "../../components/Navigation"

function Home (){
    return(
        <div className="container">
            <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME"  curriculum="CV"/>

            <div className="font-home">
                <h1 className="name">DHARMA HERRERA</h1>
                <p className="name2">FRONT-END DEVELOPER</p>

            </div>
            <div className="content">
                <div className="text-contact">
                    <div className="teext">
                        <p>Contactame!</p>
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

export default Home;
import React from 'react';
import '../css/style.css';
import triangulos from '../../img/triangulos.jpg'
import Navigation from "../../components/Navigation";

function Home (){
    return(
        <div className="large-container">
             <Navigation home="INICIO" project="PROYECTOS" about="CONÓCEME"  />
            <div className="container">   {/*  div de contenido de home*/ }
                <div className="content-home">  {/*  div de letras de presentacion*/ }
                    <div className="font-home">
                        <h1 className="name">Dharma Herrera Martínez</h1>
                        <p className="name2">Frontend Developer</p>

                    </div>
                    <div className="contac">
                        <p>Contactame!</p>
                        <p><i className="far fa-envelope"></i>Correo:dharma.herrera@gmail.com</p>
                        <p>o puedes hacerlo por estas redes:</p>
                        <div className="btnsocial">
                            <a href="https://www.linkedin.com/in/dharmaherrera/"><i className="fab fa-linkedin"></i>Linkedin</a>
                            <a href="https://github.com/dhaarmaa"><i className="fab fa-github"></i>GitHub</a>
                        </div>
                    </div>  
                </div>
               <img className="img-triangulos" src={triangulos} />
            </div>
        </div>
    )
}

export default Home;
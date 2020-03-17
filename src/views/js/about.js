import React from 'react';
import '../css/style.css';
import Navigation from '../../components/Navigation';
import image1 from '../../img/presentation.png';
import triangulos from '../../img/triangulos.jpg'

function About(){
    
    return(
        
        <div className="large-container">
            <div className="test">
                <div>
                <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME"  curriculum="CV"/>
                    <div className="headline">
                        <h1>CONOCEME</h1>
                    </div>
                    </div>
                        <img src={triangulos}  className="img-test"/>
              
            </div>
            <div className="container-about">
            <div className="content-about">
                <div className="photo">
                    {/*fotos con el cmputador/ foto con el instrumento*/}

                    <img src={image1} className="img-about"/> 
                </div>
                <div className="description">
                    <p>Egresé del colegio en  el año 2017,desarrolladora  web front-end developer de Laboratoria en el año 2019.</p>
                    <p>
                        En  este bootcamps  de Laboratoria  aprendi  JavaScript, React, HTML5, CSS3, Git, gitHub,la implemnetación de frameworks y database dinamica como firebase, el trabajo en equipo, el respeto a las opiniones de los demás, planificación, pero lo mas importante el "probar, fallar y volver a probar", siempre preguntar, nunca quedarnos con la duda, y que somos capaces de aprender todo.
                    </p>
                    <p>Me caracterizo por ser muy alegre, risuaña, energica, perseverante y apasionada en cualquier cosa que me proponga hacer.</p>
                    <p>    
                        Como pasatiempo soy músico, me dedico a tocar el instrumento viola desde los 13 años.
                    </p>
                </div>
            </div>
            </div>
            
                
        </div>
    )
}

export default About;
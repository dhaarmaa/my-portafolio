import React from 'react';
import '../css/about.css';
import Navigation from '../../components/Navigation';

function About(){
    return(
        
        <div className="container-about">
            <div className="headline">
                <h1>CONOCEME</h1>
            </div>
            <div className="content">
                <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME" contact="CONTACTsAME" curriculum="CV"/>
                <div className="photo">
                    {/*fotos con el cmputador/ foto con el instrumento*/}
                </div>
                <div className="description">
                    <p>Hola!, tengo 19 años, egresé del colegio el año 2017,desarrolladora  web front-end developer de Laboratoria en el año 2019.</p>
                    <p>
                        En  este bootcamps  de Laboratoria  aprendi  JavaScript, React, HTML5, CSS3, Git, gitHub,la implemnetación de frameworks y database dinamica como firebase, el trabajo en equipo, el respeto a las opiniones de los demás, planificación, pero lo mas importante el "probar, fallar y volver a probar", siempre preguntar, nunca quedarnos con la duda, y que somos capaces de aprender todo.
                    </p>
                    <p>    
                        Como pasatiempo soy músico, me dedico a tocar el instrumento viola desde los 13 años, y hace poco empece  a indagar un poco en el mundo de la fotografía 
                    </p>
                </div>
            </div>
                
        </div>
    )
}

export default About;
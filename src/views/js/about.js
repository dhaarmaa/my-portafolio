import React from 'react';
import '../css/style.css';
import Navigation from '../../components/Navigation';

import collage from '../../img/collage1.png';
import trianguloos2 from '../../img/trianguloos2.png';

function About(){
    
    return(
        
        <div className="large-container">
      
              
                <Navigation home="INICIO" project="PROYECTOS" about="CONÓCEME"  curriculum="CV"/>
                    <div className="headline">
                        <h1>CONÓCEME</h1>
                    </div>
                 
              
            <div className="container-about">
            <div className="content-about">
           
                    <img src={collage} className="img-about"/> 
        
                <div className="description">
                    <p>Estudié en el Liceo Madre Cecilia Lazzeri hasta el año 2017 cuando egresé de 4° medio, los dos años siguientes me dediqué a la música hasta el 2019 que ingresé a Laboratoria como desarroladora web front-end developer.</p>

                    <p>En este bootcamps de Laboratoria aprendí JavaScript, React, HTML5, CSS3, Git, gitHub,la implementación de frameworks y database dinámica como Firebase, el trabajo en equipo, el respeto a las opiniones de los demás, planificación, pero lo más importante el "probar, fallar y volver a probar", siempre preguntar, nunca quedarnos con la duda, y que somos capaces de aprender todo.
                    </p>

                    <p>Me caracterizo por ser muy perseverante de objetivos claros y metas logrables, alegre, risueña, enérgica y apasionada en cualquier cosa que me proponga hacer.</p>

                    <p>Como pasatiempo soy músico, me dedico a tocar un instrumento clásico (viola) desde los 13 años, participo en dos orquestas distintas aportando con mi pasión y amor por este arte.
                    </p>
                </div>
            </div>
            <div className="triangulediv">
                <img src={trianguloos2} className="triangle" />
            </div>
            </div>
           
        </div>
    )
}

export default About;
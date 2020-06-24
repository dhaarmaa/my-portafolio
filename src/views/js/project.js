import React from 'react';
import '../css/style.css';
import Navigation from '../../components/Navigation';
import ProjectBoxes from '../../components/ProjectBoxes';
import trianguloos2 from '../../img/trianguloos2.png';
import project1 from '../../img/imgProject/project1.png';
import project2 from '../../img/imgProject/project2.png';
import project3 from '../../img/imgProject/project3.png';

function Project(){
    return(
        <div className="large-container">
                    <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME"  curriculum="CV"/>
                        <div className="headline">
                            <h1>PROYECTOS</h1>
                        </div>
            <div className="content-project">
                <div className="projectBoxes">
                    <ProjectBoxes
                        imagesource={project1}
                        name="Burger Queen"
                        description="Aplicación de restaurante para tomar el pedidos"
                        link="https://github.com/dhaarmaa/SCL010-Burger-Queen/tree/feature/dharma"
                        link1="https://burger-queens.web.app/"
                        
                    />   
                    <p className="descriptionProject">"Es una aplicación para tomar pedidos en un restauran, la cual se va automáticamente a la cocina,  construido en ReactJs, con las herramientas de HTML, CCS, material UI, firebase, entre otras; tuvo una  duración de tres semanas en el cual trabajamos de tríos, en este proyecto me dedique a la parte de UI principalmente."</p> 
                </div>    
                <div className="projectBoxes">           
                    <ProjectBoxes
                        imagesource={project2}
                        name="VidaSenior"
                        description="Red Social para las personas de tercera edad"
                        link="https://github.com/dhaarmaa/vidaSenioor/tree/master"
                        link1="https://fir-react-72763.web.app/"
                    />
                    <p className="descriptionProject">"Es una aplicación que funciona como red social para personas que ya abarcan la tercera edad, su objetivo era que toda la información de actividades u otras cosas estuvieran a su alcance, está hecho en ReactJs, con las herramientas  HTML, CSS , base de datos Firebase, más las herramientas de prototipo la cual ocupe Figma,  tuvo dos semanas de duración, se trabajo en tríos, aunque esta es la recreación del proyecto que hice sola."</p>
                </div> 
                <div className="projectBoxes">  
                    <ProjectBoxes
                        imagesource={project3}
                        name="Vipago"
                        description="Juego de gatos"
                        link="https://github.com/dhaarmaa/SCL011-Hackathon-Empowered-Geeks/tree/feature/dharma"
                        link1="https://citi-vipago.firebaseapp.com/"
                    />
                     <p className="descriptionProject">"Aplicación para pagar todo lo que sea cuentas, fue creada para las personas que perdieron totalmente su capacidad visual, hecha en ReactJs, con HTML, CSS, librería de reconocimiento de voz para que el usuario pueda interactuar al 100% con esta, fue hecha en un plazo de una semana en la cual trabajamos 3 front-end y una UX."</p>
                </div> 
            </div>
            <div className="footer" >
                <img src={trianguloos2} className="triangle" />
            </div>
        </div>
    )
}

export default Project;

import React from 'react';
import '../css/project.css';
import Navigation from '../../components/Navigation';
import ProjectBoxes from '../../components/ProjectBoxes';

function Project(){
    return(
        <div className="container-project">
            <div className="headline">
                <h1>PROYECTOS</h1>
            </div>
            <div className="content">
                <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME" contact="CONTACTAME" curriculum="CV"/>
                <div className="project">
                    <ProjectBoxes
                        imagesource="https://static1.squarespace.com/static/5aea79c52487fde9b8efd0b1/t/5bb6b388e5e5f09147c1b870/1538700168395/liberty.png"
                        name="Burger Queen"
                        description="Aplicación de restaurante para tomar el pedidos"/>
                    <ProjectBoxes
                        imagesource="https://static1.squarespace.com/static/5aea79c52487fde9b8efd0b1/t/5bb6b388e5e5f09147c1b870/1538700168395/liberty.png"
                        name="VidaSenior"
                        description="Red Social para las personas de tercera edad"/>
                    <ProjectBoxes
                        imagesource="https://static1.squarespace.com/static/5aea79c52487fde9b8efd0b1/t/5bb6b388e5e5f09147c1b870/1538700168395/liberty.png"
                        name="Tic Tac Toe"
                        description="Juego de gatos"/>
                    <ProjectBoxes
                        imagesource="https://static1.squarespace.com/static/5aea79c52487fde9b8efd0b1/t/5bb6b388e5e5f09147c1b870/1538700168395/liberty.png"
                        name="Battleship"
                        description="Juego de batalla naval basado en como entrenar a tu dragón"/>
                    

                </div>
            </div>

        </div>
       
            
            

    )
}

export default Project;

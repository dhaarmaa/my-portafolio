import React from 'react';
import '../css/home.css';
import Navigation from "../../components/Navigation"

function Home (){
    return(
        <div className="container-home">
             <Navigation home="INICIO" project="PROYECTOS" about="CONOCEME" contact="CONTACTTAME" curriculum="CV"/>
            <div>
                <h1>DHARMA HERRERA</h1>
                <p>FRONT-END DEVELOPER</p>

            </div>
        </div>
    )
}

export default Home;
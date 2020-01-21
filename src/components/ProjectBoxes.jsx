import React, { Component } from 'react';
import '../components/projectBoxes.css';

class ProjectBoxes extends Component {
    render(){
        return(
            
            <div id="all">
                        
                        <div class="view view-tenth">
                            <img src={this.props.imagesource} />
                            <div class="mask">
                                <h2>{this.props.name}</h2>
                                <p>{this.props.description}</p>
                                <a href={this.props.link} class="info">Repositorio</a>
                                <a href="#" class="info">Sitio Web</a>
                            </div>
                        </div>
            </div>
        )
    }
}

export default ProjectBoxes;
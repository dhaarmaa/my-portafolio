import React, { Component } from 'react';
import '../components/projectBoxes.css';

class ProjectBoxes extends Component {
    render(){
        return(
            
            <div id="all">
                        
                        <div className="view view-tenth">
                            <img src={this.props.imagesource} />
                            <div className="mask">
                                <h2>{this.props.name}</h2>
                                {/* <p>{this.props.description}</p> */}
                                <a href={this.props.link} className="info">Repositorio</a>
                                <a href={this.props.link1} className="info">Sitio Web</a>
                            </div>
                          
                        </div>
                        <p>{this.props.p}</p>
            </div>
        )
    }
}

export default ProjectBoxes;
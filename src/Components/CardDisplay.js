import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, ProgressBar} from 'react-bootstrap';
import '../App.css';

export class CardDisplay extends Component {
    
    render() {
        return (
            <div className="cards">
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" width="100%" src={this.props.quiz.img} />
            </Card>      
            <br/>
                <Card.Title>{this.props.quiz.title}</Card.Title>
                    <Card.Text>
                        {this.props.quiz.subtitle}
                    </Card.Text>
                    
                        <ProgressBar />
                    
                    
                     
                   
        

        </div> 
        )
    }
}

export default CardDisplay

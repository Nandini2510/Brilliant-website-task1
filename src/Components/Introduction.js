import React, { Component } from 'react'
import quiz from './quiz-list';
import CardDisplay from './CardDisplay';
import {Card,Col,Container,Row} from 'react-bootstrap';
import '../App.css';

class Introduction extends Component {
    constructor(){
        super()
        this.state = {
            quizes:quiz
        }
    }
    render() {
        const quizItem = this.state.quizes.map(item => {
            return(
                <Col md={4}>
                    <CardDisplay quiz={item}/>

                </Col>
            )
        })
        return (
            <Container >
              

                <div className="intro">

               
                    <div class="chapter-number" data-v-69f3b23e="">
                     <span className="color-spans" data-v-69f3b23e="">1</span> 
                     <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-69f3b23e=""><path d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z" fill="#758bff" data-v-69f3b23e=""></path>
                     </svg>
                
                
                    <h1 className="title">Introduction</h1>
                 
                </div>
                <span><p className="subtitle">Put your logic to the test with these warmups!</p></span>
                </div>
                    <br/>

                    <Row>
            
                        {quizItem}
                    </Row>
                    <br/><br/>
         </Container>
        )
    }
}

export default Introduction

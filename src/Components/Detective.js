import React, { Component } from 'react'
import rd from './detective-list';
import {Card,Col,Container,Row} from 'react-bootstrap';
import CardDisplay from './CardDisplay';

 class Detective extends Component {
     constructor(){
         super()
         this.state ={
             quiz:rd
         }
     }
    render() {
        const quizrd = this.state.quiz.map(item => {
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
                     {/* <span className="color-spans" data-v-69f3b23e="">1</span> 
                     <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-69f3b23e=""><path d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z" fill="#758bff" data-v-69f3b23e=""></path>
                     </svg> */}
                
                
                    <h1 className="title"> Detective</h1>
                 
                </div>
                <span><p className="subtitle">Eliminate the impossible and uncover the truth!</p></span>
                </div>
                    <br/>

                    <Row>
            
                        {quizrd}
                    </Row>
                    <br/><br/>
         </Container>
        )
    }
}

export default Detective

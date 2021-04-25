import React from 'react'
import Navigation from './Components/Navigation'
import { Container,Card,Button,Row,Col} from 'react-bootstrap';
import './App.css';
import Introduction from './Components/Introduction';
import Detective from './Components/Detective';
import QuizDisplay from './Components/QuizDisplay';

function App(){

  var handleQuiz= function(){
    return(
      <QuizDisplay/>
    );
  }
  
  
  return(
    <>
    <Navigation/>
    <Container fluid >
      
      <Row className="bg-color justify-content-md-center" >
        <Col md="auto" md={6}>
          <br/><br/>
          <div>
          
          <p ><i class="fa fa-angle-left" aria-hidden="true" ></i> &nbsp;Back to all courses</p>
          </div>
          <h1>Logic</h1>
          <h3>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h3>
          <p>The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>
          <p>You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges! &nbsp; <span><a className="underline">Read More.</a></span></p>
          <br/>
          <a className="underline" >View prerequisites and next step</a>

          


        </Col>

        <Col md="auto" md={4}>
        <br/><br/>
        <Card  className="card-style">
          
          <Card.Img variant="top" className="card-img" src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=508" />
          <br/>
          
       
              <Container fluid>
              <Row>
                <Col md="auto" md={6}>
                  <div className="card-body">
              <h1>37</h1>
                <p>
                 Interactive quizzes
                </p>
                </div>
                </Col>
                
                <Col md="auto" md={6}>
                  <div className="card-body">
                <h1>265+</h1>
                  <p>
                  Concepts and exercises
                  </p>
                  </div>
                  </Col>
                
              </Row>
              </Container>
              
                <button onClick={handleQuiz} className="button" >Start Courses</button>
       
       
        
        </Card>
        <br/><br/>

          
          </Col>
      </Row>
      <Introduction/>
      <Detective/>
    </Container>
    {/* "background-image: url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=508);" */}
    </>
    
  );
}

export default App
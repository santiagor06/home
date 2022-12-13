import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import url from "../../image/miniatura.png"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';


const ProjectCard = ({ value }) => {

  return (
   <Container>
    <Row className="justify-content-md-center">
    <Col xs={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>urLearning</Card.Title>
        <Card.Text>
        I worked with a group of 8 people in Henry's final project, as a full stack developer in the creation of a web application for selling online courses.

        </Card.Text>
        <a href="https://pf-ur-learning.vercel.app/"><Button variant="light">View 🚀</Button></a>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>PokeAPP</Card.Title>
        <Card.Text>
        I designed and developed a pokemon App that included searching, filtering, sorting and creating pokemons.for the Front I used React, Redux and CSS.for the Back I used, Node.js with Express.

        </Card.Text>
        <a href="https://pf-ur-learning.vercel.app/"><Button variant="light">View 🚀</Button></a>
      </Card.Body>
    </Card>
    </Col>
    </Row>
   </Container>
     
   
    
  );
};



export default ProjectCard;

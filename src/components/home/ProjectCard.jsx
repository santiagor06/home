import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import url from "../../image/miniatura.png"
import Button from "react-bootstrap/Button"
import  Container  from "react-bootstrap/Container";



const ProjectCard = ({ value }) => {

  return (
   <>
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
        <Card.Title>urLearning</Card.Title>
        <Card.Text>
        I worked with a group of 8 people in Henry's final project, as a full stack developer in the creation of a web application for selling online courses.

        </Card.Text>
        <a href="https://pf-ur-learning.vercel.app/"><Button variant="light">View 🚀</Button></a>
      </Card.Body>
    </Card>
    </Col>
   </>
     
   
    
  );
};



export default ProjectCard;

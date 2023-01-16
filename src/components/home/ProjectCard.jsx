import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import url from "../../image/miniatura.png"
import poke from "../../image/pokemon.png"
import uplo from "../../image/upload.png"
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
        A website for the sale of online courses.the technologies used were postgreSQL,node.js and express for the back,for the front we used react,redux and tailwind,we also used firebase for the user authentication. 
        </Card.Text>
        <a href="https://pf-ur-learning.vercel.app/"><Button variant="light">View 🚀</Button></a>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poke} />
      <Card.Body>
        <Card.Title>PokeAPP</Card.Title>
        <Card.Text>
        I designed and developed a pokemon App that included searching, filtering, sorting and creating pokemons.for the Front I used React, Redux and CSS.for the Back I used, Node.js with Express.

        </Card.Text>
        <a href="https://github.com/santiagor06/PIpokemon"><Button variant="light">View 🚀</Button></a>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={uplo} />
      <Card.Body>
        <Card.Title>Upload Image</Card.Title>
        <Card.Text>
        An application that allows you to upload files and gives you a url to access it. I used React and bootstrap for the front end, cloudinary to upload the files.        </Card.Text>
        <a href="https://imageupload-omega.vercel.app/"><Button variant="light">View 🚀</Button></a>
      </Card.Body>
    </Card>
    </Col>

    </Row>
   </Container>
     
   
    
  );
};



export default ProjectCard;

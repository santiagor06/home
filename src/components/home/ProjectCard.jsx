import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import url from "../../image/miniatura.png"
import poke from "../../image/pokemon.png"
import git from "../../image/giticon.png"
import uplo from "../../image/upload.png"
import issue from "../../image/gitIssue.png"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';



const ProjectCard = ({ value }) => {
const techURL=["Javascript","React","PostgreSQL","Node.js","Express","Firebase"]
const techPoke=["Javascript","React","CSS","PostgreSQL","Node.js","Express"]
const techUpload=["Javascript","React","Bootstrap","Cloudinary"]
const techIssue=["Typescript","React","React Query","Bootstrap"]
  return (
   <Container>
    <Row  className="g-4 justy-content align-item" xs={2} md={4} >
    <Col >
    <Card style={{ width: '18rem' ,height: '400px' }}>
      <Card.Img style={{ height: '150px' }} variant="top" src={url} />
      <Card.Body>
        <Card.Title>urLearning</Card.Title>
        <Card.Text>
       A web application for the sale of online courses, with shopping cart and user authentication.
        <div>
          {techURL.map(tech=>{
          return (<Badge pill bg="primary">
        {tech}
      </Badge>)}
            )}
 
          </div>
        </Card.Text>
        <a href="https://pf-ur-learning.vercel.app/"><Button variant="light">View 🚀</Button></a>
        <a href="https://github.com/JuanSBass/PF-urLearning"><Button variant="light">Repo <img style={{ width: '20px' ,height: '20px' }}  src={git}/> </Button></a>
      </Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '18rem' ,height: '400px' }}>
      <Card.Img style={{ height: '150px' }} variant="top" src={poke} />
      <Card.Body>
        <Card.Title>PokeAPP</Card.Title>
        <Card.Text>
        I designed and developed a pokemon App that included searching, filtering and sorting.  
        <div>
          {techPoke.map(tech=>{
          return (<Badge pill bg="primary">
        {tech}
      </Badge>)}
            )}
 
          </div>

        </Card.Text>
        <a href="https://pokeapp-ochre.vercel.app/"><Button variant="light">View 🚀</Button></a>
        <a href="https://github.com/santiagor06/PIpokemon"><Button variant="light">Repo <img style={{ width: '20px' ,height: '20px' }}  src={git}/> </Button></a>
      </Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '18rem' ,height: '400px' }}>
      <Card.Img variant="top" src={issue} style={{ height: '150px' }}  />
      <Card.Body>
        <Card.Title>Git Issues</Card.Title>
        <Card.Text>
        Application that displays the issues in the official react repository, filtering by labels and issue status.
        <div>
          {techIssue.map(tech=>{
          return (<Badge pill bg="primary">
        {tech}
      </Badge>)}
            )}
 
          </div></Card.Text>
        
        <a href="https://query-issue.vercel.app/issues/list"><Button variant="light">View 🚀</Button></a>
        <a href="https://github.com/santiagor06/query-issue"><Button variant="light">Repo <img style={{ width: '20px' ,height: '20px' }}  src={git}/> </Button></a>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' ,height: '400px' }}>
      <Card.Img variant="top" src={uplo} style={{ height: '150px' }}  />
      <Card.Body>
        <Card.Title>Upload Image</Card.Title>
        <Card.Text>
        An application that allows you to upload files and gives you a url to access it.
        <div>
          {techUpload.map(tech=>{
          return (<Badge pill bg="primary">
        {tech}
      </Badge>)}
            )}
 
          </div></Card.Text>
        
        <a href="https://imageupload-omega.vercel.app/"><Button variant="light">View 🚀</Button></a>
        <a href="https://github.com/santiagor06/imageupload"><Button variant="light">Repo <img style={{ width: '20px' ,height: '20px' }}  src={git}/> </Button></a>
      </Card.Body>
    </Card>
    </Col>


    </Row>
    

    
   </Container>
     
   
    
  );
};



export default ProjectCard;

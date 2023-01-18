import React from 'react'
import { Container, Breadcrumb} from "react-bootstrap";

const Breadcrumbs = (props) => {
 

    return (
 
      <Container fluid style={{background: 'rgb(243, 243, 243)'}} id='bread'>
          <Container style={{marginTop: 100, maxWidth: 1110}}>
          <Breadcrumb>
          <Breadcrumb.Item href={props.path === '/build-my-website' ? '#' : '/'}>Accueil</Breadcrumb.Item>
          {props.link ? <Breadcrumb.Item href={props.link}>{props.cat}</Breadcrumb.Item> : null}
          <Breadcrumb.Item active>{props.text}</Breadcrumb.Item>
          </Breadcrumb>
          </Container>
      </Container>
    )
  
 
}

export default Breadcrumbs
import React from 'react';
import Link from 'next/link'
import {Container, Row, Col, Button} from "react-bootstrap"
import {FaArrowRight} from 'react-icons/fa'


const Start = (props) => {

        return (

          <Container fluid style={{background: '#223151', marginTop: 80, marginBottom: -150, paddingTop: 130, paddingBottom: 130}} id='start'>


          <Row style={{maxWidth: 1280, margin: 'auto'}}>
          <Col sm={8} id='start' >
         
          <h2 className="display-4" style={{marginBottom: 0, fontWeight: 700, fontSize: 60, color: 'white', }}>Stunning and </h2>
          <h2 className="display-4" style={{marginBottom: 0, fontWeight: 700, fontSize: 60, color: 'white' }} id='startTop'>easy-to-use websites</h2>
              </Col>
          <Col sm={3} style={{minWidth: 350}} >
              
              <Link href={props.path === '/build-my-website' ? '#' : '/start/'}>
                <Button id='buttonHover' className="btn-lg btn btn btn-primary" style={{fontWeight: 700, marginTop: 50, paddingTop: 10, height: 60, minWidth: 250}}>Start Now <span style={{fontSize: 18}}><FaArrowRight /></span></Button></Link>
              </Col>
            
            </Row>
          
          </Container>

  )
}

export default Start
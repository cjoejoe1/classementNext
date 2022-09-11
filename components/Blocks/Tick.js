import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import {FaCheck} from 'react-icons/fa'

const Tick = () => {

        return (

          <Container fluid style={{paddingTop: 50,paddingBottom: 20, paddingLeft: 27, paddingRight: 27, background: 'rgb(247, 247, 251)'}} id='tickPosition'>
            <Row style={{maxWidth: 1280, margin: 'auto'}}>
              <Col lg={3}>
              <h3 style={{color: '#212529', fontSize: 28, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left'}}> <span style={{fontSize: 28}}>  <FaCheck /> </span> Get more clients</h3>
                <p style={{textAlign: 'left', fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>Start receiving leads with your brand new website.</p>
              </Col>
              <Col lg={3}>
              <h3 style={{color: '#212529', fontSize: 28, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left'}} id='tickh3'> <span style={{fontSize: 28}}><FaCheck /></span> Save £000's</h3>
                <p style={{textAlign: 'left', fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>No setup fees, hosting and maintenance costs.</p>
              </Col>
              <Col lg={3} >
              <h3 style={{color: '#212529', fontSize: 28, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left'}} id='tickh3'> <span style={{fontSize: 28}}><FaCheck /></span> 100% stress free</h3>
              <p style={{textAlign: 'left', fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>Simply answer a few questions and we do the rest!</p>
              </Col>
              <Col lg={3} >
              <h3 style={{color: '#212529', fontSize: 28, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left'}} id='tickh3'> <span style={{fontSize: 28}}><FaCheck /></span> Human support</h3>
              <p style={{textAlign: 'left', fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>Talk to our real and friendly human support team.</p>
              </Col>
            </Row>
          </Container>

  )
}

export default Tick
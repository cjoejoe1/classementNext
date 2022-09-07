import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import Image from 'next/image'
import forWho1 from '../../images/forWho1.png'
import forWho2 from '../../images/forWho2.png'
import forWho3 from '../../images/forWho3.png'
import forWho4 from '../../images/forWho4.png'

const ForWho = (props) => {

  return (

    <>

      <Container style={{maxWidth: 1140}}>

        <Row className="align-items-center">
          <Col>
            <Row>
        <Col style={{maxWidth: 270, marginRight: -15}}>
        <div data-aos="zoom-in" data-aos-duration="400">

<Image src={forWho1} />
              </div>
              <div data-aos="zoom-in" data-aos-duration="400" style={{marginTop: 20}}>
              <Image src={forWho2} />
              </div>
              </Col>
          <Col style={{maxWidth: 270}}>
            <div data-aos="zoom-in" data-aos-duration="400" data-aos-delay="500">
            <Image src={forWho3} />
            </div>
            <div data-aos="zoom-in" data-aos-duration="400" data-aos-delay="750" style={{marginTop: 20}}>
            <Image src={forWho4} />
              </div>
              </Col>
              </Row>
              </Col>
          
          <Col lg="6" md={9}>
            <div>
            <h2 className="display-4" style={{marginBottom: 40, fontWeight: 700, fontSize: 60}} id="forWho">
                Is this for you?               
              </h2>
              <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>
              Builders, cleaners, architects, estate agents… our clients are real local businesses. They want to grow online but they also have their own day to day to deal with.
                </p>
                <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>
                We help by providing your very own website and a step by step guide to be seen online.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

  </>

  )
}

export default ForWho
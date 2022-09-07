import React from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";

import {FaArrowRight} from 'react-icons/fa'
import Link from "next/link"

const PriceTable = () => {




  return (
    <Container>
    <Row style={{maxWidth: 1000, margin: 'auto'}}>

    <Col sm={6} style={{textAlign: 'center'}}>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Choose Annual</h4>
          </div>
          <div className="card-body d-flex flex-column">
            <h1 className="card-title pricing-card-title">£39 <small className="text-muted">/ mo</small></h1>
            <p>Billed annually (£468+VAT)</p>
            <p>Save £120 on our pay monthly price!</p>
            <Link href={'/app/'}><Button id='buttonHover' className="btn-lg btn btn btn-primary" style={{fontWeight: 700, marginTop: 50, paddingTop: 6, height: 60, minWidth: 250}}>Start Now <FaArrowRight /></Button></Link>
          </div>
        </div>
     </Col>
    <Col sm={6} style={{textAlign: 'center'}}>
      <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Choose Monthly</h4>
          </div>
          <div className="card-body d-flex flex-column">
            <h1 className="card-title pricing-card-title">£49 <small className="text-muted">/ mo</small> </h1>
            <p>Billed monthly (+VAT)</p>
            <p>12 months contract</p>
     
            <Link href={'/app/'}><Button id='buttonHover' className="btn-lg btn btn btn-primary" style={{fontWeight: 700, marginTop: 50, paddingTop: 6, height: 60, minWidth: 250}}>Start Now <FaArrowRight /></Button></Link>
          </div>
        </div></Col>



      </Row>
  </Container>
  )
}

export default PriceTable
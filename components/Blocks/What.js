import React from 'react';
import {Container, Row, Col} from "react-bootstrap"

const What = () => {

  return (
    <Container fluid style={{ margin: 'auto', position: 'relative', zIndex: 5, background: 'white', paddingTop: 130, marginBottom: 130}} >
      <div data-aos="fade-up" data-aos-duration="750">
    <h2 className="display-4" style={{textAlign: 'center', marginBottom: 40, fontWeight: 700, fontSize: 60}}>Do you need more clients?</h2>
      <Row style={{maxWidth: 1000, margin: 'auto'}}>
        <Col sm>
          <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>Do you want more clients from the web but don’t have time to do anything about it? Does the thought of programming a website freak you out or bore you to tears?</p>
          <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>You’re already great at your job, you don’t need to do this. Putting your business online does not have to be complicated.</p>
        </Col>
      </Row>
      </div>
    </Container>

  )
}

export default What
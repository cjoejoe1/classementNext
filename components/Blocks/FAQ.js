import React from 'react';
import Link from 'next/link';
import {Container, Row, Col} from "react-bootstrap"


const FAQ = (props) => {


        return (
          <Container fluid style={{marginTop: 100, marginBottom: 80 }}>
              <h2 className="display-4" style={{textAlign: 'center', margin: 'auto', marginBottom: 100, fontWeight: 700, fontSize: 60, maxWidth: 600}} data-aos="fade-up" data-aos-duration="250">Frequently asked questions</h2>
            <Row style={{maxWidth: 900, margin: 'auto'}} data-aos="fade-up" data-aos-duration="250">
              <Col sm> <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>How much does Stimply cost?</h3>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>You can be billed annually at £29/month (+ VAT) or monthly at £39/month (+ VAT). This includes your website, domain name and professional email.</p></Col>
              <Col sm><h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>Do I have to pay setup fees?</h3>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>No. Setup is completely free.</p></Col>
            </Row>

            <Row style={{maxWidth: 900, margin: 'auto'}} data-aos="fade-up" data-aos-duration="250">
              <Col sm> <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>Do I have to commit to a long term contract?</h3>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Not at all. Your website will be automatically renewed every month and you can stop at any time.</p></Col>
              <Col sm>          <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>Can I make changes on the website once it’s live?</h3>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Yes. We will provide default text that will suit your activity. But you are then free to make any further changes in your own personal dashboard.</p></Col>
            </Row>

            <Row style={{maxWidth: 900, margin: 'auto'}} data-aos="fade-up" data-aos-duration="250">
              <Col sm><h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>Can I choose any domain name?</h3>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 0}}>A domain name in .com or .co.uk is included in your package. If it's available, it's yours!</p></Col>
              <Col sm>
                {/* <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>{data.Q5}</h3>
                <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 0}}>{data.A5}</p> */}
                </Col>
            </Row>

            <Row style={{maxWidth: 200, margin: 'auto', marginTop: 50}}>

         <p style={{textAlign: "center"}}>Didn't find your answer?<br></br>
         <Link href="/contact/">Contact us here</Link>
         </p>
            </Row>
          </Container>

      )

}

export default FAQ
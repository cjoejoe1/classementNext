import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import Seo from '../components/seo';
import FormContact from '../components/Blocks/FormContact'
import { TitleBlock } from '../components/common';
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
function Contact(props) {
  
  const boxBgColor = 'white'
  const formFontColor = 'black'

  return (
 

    <Layout path={props.path}>

              <Seo title="We'd love to talk"/>
              <Breadcrumbs link='/contact/' text='Contact us'/>
              <Container  id='mobileContact' style={{ maxWidth: 1260, marginTop: 174}}>
              <TitleBlock><h1>Get in touch</h1></TitleBlock>
              <p className="lead" style={{maxWidth: 800, textAlign: 'center', margin: 'auto', marginBottom: 70}}>We'd love to chat! Don't hesitate to contact us if you need anything.</p>
              <Row id='mobileSpace' style={{marginTop: 50, maxWidth: 1000, margin: 'auto'}}>
                <Col sm={6}><h2 style={{marginTop: 50, marginBottom: 20, font: 'bold 1.5em / 1.2 Montserrat, sans-serif'}}><FaEnvelope /> Email</h2>
                <Row>
                <Col><b>General Enquiries</b></Col>
                <Col  sm={7}>{<a href={`mailto: hello@stimply.com`}>hello@stimply.com</a>}</Col>
                </Row>
                <Row>
                <Col><b>Customer Support</b></Col>
                <Col  sm={7}>{<a href={"mailto: support@stimply.com"}>support@stimply.com</a>}</Col>
                </Row>
                <Row>
                <Col><b>Partners</b></Col>
                <Col sm={7}>{<a href={`mailto:partners@stimply.com`}>partners@stimply.com</a>}</Col>
                </Row>
                <Row>
                <Col><b>Press</b></Col>
                <Col  sm={7}>{<a href={`mailto:press@stimply.com`}>press@stimply.com</a>}</Col>
                </Row></Col>
                <Col sm={3}><h2 style={{marginTop: 50, marginBottom: 20, font: 'bold 1.5em / 1.2 Montserrat, sans-serif'}}><FaMapMarkerAlt /> Address</h2>
                <p><b>Stimply @ Kohdao Ltd.</b><br></br>
                7 Clapham Park Terrace<br></br>London, SW2 5EA<br></br>United Kingdom
                  </p></Col>
                <Col sm={3}><h2 style={{marginTop: 50, marginBottom: 20, font: 'bold 1.5em / 1.2 Montserrat, sans-serif'}}><FaPhoneAlt /> Telephone</h2>
                <p>
                  <b>UK</b> -  0203 287 1064<br></br>
                  <b>International</b> -  +44 (0) 203 287 1064</p></Col>
              

                       <Col sm={6}> </Col>
                     </Row>

                     <Row style={{maxWidth: 600, margin: 'auto', marginTop: 100}}>
                     <div>
                <h2 style={{color: 'black', marginTop: 10, marginBottom: 50, font: 'bold 2em / 1.2 Montserrat, sans-serif', textAlign: 'center'}}>or, send us a message <span role="img" aria-label="free" id='notMobile'>👋</span></h2>
              </div>
                     <FormContact boxBgColor={boxBgColor} formFontColor={formFontColor}/>
                     </Row>
                    
              </Container>
              </Layout>

  )
}

export default Contact
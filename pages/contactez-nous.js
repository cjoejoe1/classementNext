import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import Seo from '../components/seo';
// import FormContact from '../components/Blocks/FormContact'
import { TitleBlock } from '../components/common';
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
function Contact(props) {
  
  const boxBgColor = 'white'
  const formFontColor = 'black'

  return (
 

    <Layout path={props.path}>

              <Seo title="Contactez-nous | Classement.com"/>
              <Breadcrumbs text='Contactez-nous'/>
              <Container  id='mobileContact' style={{ maxWidth: 1260, marginTop: 174}}>
              <TitleBlock><h1>Contactez-nous</h1></TitleBlock>
              <p className="lead" style={{maxWidth: 800, textAlign: 'center', margin: 'auto', marginBottom: 70}}>Nous sommes ouverts du Lundi au Vendredi (9h - 19h).</p>
              <Row id='mobileSpace' style={{marginTop: 50, maxWidth: 1000, margin: 'auto'}}>
                <Col sm={6}><h3 style={{marginTop: 50, marginBottom: 20, font: 'bold 1.5em / 1.2 Montserrat, sans-serif'}}><FaEnvelope /> Email</h3>
                <Row>
                <Col><b>Support client</b></Col>
                <Col  sm={7}>{<a href={`mailto: bonjour@classement.com`}>bonjour@classement.com</a>}</Col>
                </Row>
                <Row>
                <Col><b>Partenariats</b></Col>
                <Col  sm={7}>{<a href={"mailto: partenaire@classement.com"}>partenaire@classement.com</a>}</Col>
                </Row>
             
             
                </Col>
                <Col sm={3}><h3 style={{marginTop: 50, marginBottom: 20, font: 'bold 1.5em / 1.2 Montserrat, sans-serif'}}><FaMapMarkerAlt /> Adresse</h3>
                <p><b>Classement.com @ Kohdao Ltd.</b><br></br>
                7 Clapham Park Terrace<br></br>London, SW2 5EA<br></br>United Kingdom
                  </p></Col>
                <Col sm={3}><h3 style={{marginTop: 50, marginBottom: 20, font: 'bold 1.5em / 1.2 Montserrat, sans-serif'}}><FaPhoneAlt /> Téléphone</h3>
                <p>
      
                 +44 (0) 203 287 1064</p></Col>
              

                       <Col sm={6}> </Col>
                     </Row>

                     {/* <Row style={{maxWidth: 600, margin: 'auto', marginTop: 100}}>
                     <div>
                <h2 style={{color: 'black', marginTop: 10, marginBottom: 50, font: 'bold 2em / 1.2 Montserrat, sans-serif', textAlign: 'center'}}>or, send us a message <span role="img" aria-label="free" id='notMobile'>👋</span></h2>
              </div>
                     <FormContact boxBgColor={boxBgColor} formFontColor={formFontColor}/>
                     </Row> */}
                    
              </Container>
              </Layout>

  )
}

export default Contact
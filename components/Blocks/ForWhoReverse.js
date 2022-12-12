import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import {FaTiktok, FaInstagram, FaGoogle, FaTwitter, FaRedditAlien, FaFacebookF, FaAmazon, FaSpotify, FaYoutube, FaSlack, FaShopify, FaSnapchatGhost } from 'react-icons/fa'

import {Button} from 'react-bootstrap'

const ForWho = (props) => {

  return (

    <>

      <Container style={{maxWidth: 1140, paddingTop: 200, marginTop: -100}} id="forWhoAnchor">
      <h2 className="display-4" style={{marginBottom: 40, fontWeight: 700, fontSize: 60, textAlign: 'center'}} id="forWho">
      Mais d'où viennent ces idées ?          
              </h2>
              <p className="lead" style={{maxWidth: 1000, textAlign: 'center', margin: 'auto', fontFamily: 'unset', fontSize: 24, marginTop: -30, marginBottom: 80}} > {"Nous analysons des millions de signaux à travers une dizaine de plateformes."}</p>
        <Row className="align-items-center">
          <Col>
            <Row>
            <Col sm={6} style={{maxWidth: 500}}>
  
  <p style={{textAlign: 'center', marginBottom: 20}} >
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10, fontFamily: 'unset', fontSize: 40}}  ><FaTiktok /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10, fontFamily: 'unset', fontSize: 40}}  ><FaInstagram /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10,  fontFamily: 'unset', fontSize: 40}}  ><FaGoogle /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10, fontFamily: 'unset', fontSize: 40}}  ><FaTwitter /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10,  fontFamily: 'unset', fontSize: 40}}  ><FaRedditAlien /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10,  fontFamily: 'unset', fontSize: 40}} ><FaFacebookF /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10,  fontFamily: 'unset', fontSize: 40}}  ><FaAmazon /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10,  fontFamily: 'unset', fontSize: 40}}  ><FaSpotify /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10, fontFamily: 'unset', fontSize: 40}}  ><FaYoutube /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10,  fontFamily: 'unset', fontSize: 40}}  ><FaSlack /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10,  fontFamily: 'unset', fontSize: 40}}  ><FaShopify /></Button>
  <Button variant="outline-dark" className="btn-lg" style={{margin: 10, fontFamily: 'unset', fontSize: 40}}  ><FaSnapchatGhost /></Button>
  </p>

</Col>
            <Col lg="6" md={9}>
            <div>

              <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 0, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>
              Notre équipe passe son temps à croiser des signaux de consommation enregistrés sur Twitter, Reddit, Instagram, Tiktok, et Google, avec la veille réalisée sur les sites étrangers et les podcasts US.                </p>
                <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>
                Nous collectons aussi toute la data des levées de startup dans le monde pour prédire des nouvelles tendances. Et nous appliquons des dizaines de framework à génération d’idées pour multiplier nos résultats.              </p>
            
            </div>
          </Col>
       
              </Row>
              </Col>
          
        
        </Row>
      </Container>

  </>

  )
}

export default ForWho
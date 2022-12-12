import React from 'react';
import {Container, Row, Col} from "react-bootstrap"

import {Button} from 'react-bootstrap'

const ForWho = (props) => {

  return (

    <>

      <Container style={{maxWidth: 1140, paddingTop: 200, marginTop: -200}} id="forWhoAnchor">
      <h2 className="display-4" style={{marginBottom: 40, fontWeight: 700, fontSize: 60, textAlign: 'center'}} id="forWho">
            L'email Createur.com, c'est quoi?          
              </h2>
              <p className="lead" style={{maxWidth: 1000, textAlign: 'center', margin: 'auto', fontFamily: 'unset', fontSize: 24, marginTop: -30, marginBottom: 80}} > {"Votre inspiration business par email"}</p>
        <Row className="align-items-center">
          <Col>
            <Row>
            <Col lg="6" md={9}>
            <div>

              <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>
              Toutes les semaines vous allez recevoir 7 idées business. 7 idées que vous allez pouvoir lancer, adapter, copier, ou simplement utiliser comme une source d’inspiration pour vos projets existants.
                </p>
                <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px'}}>
                Mais d'où viennent ces idées? Notre équipe passe son temps à croiser des signaux (twitter, instagram, facebook), à faire de la veille sur les sites étrangers, à écouter et analyser des podcasts.
              </p>
            
            </div>
          </Col>
        <Col style={{marginRight: -15}}>
        <div style={{marginTop: 20}}>
          <p style={{textAlign: 'center'}}>
          <Button className="btn-lg" variant="dark" style={{marginRight: 15, marginBottom: 15}}>Bundling / Unbundling</Button>
<Button className="btn-lg" variant="dark" style={{marginRight: 15, marginBottom: 15}}>Marketplace de niche</Button>
<Button className="btn-lg" variant="dark" style={{marginRight: 15, marginBottom: 15}}>Framework à idées</Button>
<Button className="btn-lg" variant="dark" style={{marginRight: 15, marginBottom: 15}}>Version française de</Button>
<Button className="btn-lg" variant="dark" style={{marginRight: 15, marginBottom: 15}}>Aidez à vendre</Button>
<Button className="btn-lg" variant="dark" style={{marginRight: 15, marginBottom: 15}}>Import / Export</Button>
<Button className="btn-lg" variant="dark"  style={{marginRight: 15, marginBottom: 15}}>Simplifiez ce problème</Button>
<Button className="btn-lg" variant="dark" style={{marginRight: 15, marginBottom: 15}}>Extension chrome de</Button>
          </p>


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
import React from 'react';
import Link from 'next/link'
import {Container, Row, Col, Button} from "react-bootstrap"
import {FaArrowRight} from 'react-icons/fa'


const Start = (props) => {

        return (

          <Container fluid style={{background: '#0f222e', marginTop: 80, marginBottom: -150, paddingTop: 130, paddingBottom: 130}} id='start'>


     
         
          <h2 className="display-4" style={{maxWidth: 800,marginBottom: 0, fontWeight: 700, fontSize: 60, color: 'white', margin: 'auto', textAlign: 'center' }}>Rejoignez nos 30 000 membres qui
lance leur business avec Createur.com </h2>
    
        
              <div style={{maxWidth: 250, margin: 'auto'}}>
              <Link href={props.path === '/build-my-website' ? '#' : '/start/'}>
                <Button id='buttonHover' className="btn-lg" style={{fontWeight: 700, marginTop: 50, paddingTop: 10, height: 60, maxWidth: 250, margin: 'auto', background: '#f00057', borderColor: '#f00057', }}>Je m'inscris <span style={{fontSize: 18}}><FaArrowRight /></span></Button>
              </Link>
              </div>
          
          </Container>

  )
}

export default Start
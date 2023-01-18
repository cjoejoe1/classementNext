import React from 'react';
import Link from 'next/link'
import {Container, Row, Col, Button} from "react-bootstrap"
import { FaAngleDoubleRight} from 'react-icons/fa'


const Start = (props) => {

        return (

          <Container fluid style={{background: '#0f222e', marginTop: 80, marginBottom: -150, paddingTop: 130, paddingBottom: 130}} id='start'>


     
         
          <h2 className="display-4" style={{maxWidth: 800,marginBottom: 0, fontWeight: 700, fontSize: 60, color: 'white', margin: 'auto', textAlign: 'center' }}>Rejoignez nos 30 000 membres qui
comparent les offres avec Classement.com </h2>
    
        
              <div style={{maxWidth: 270, margin: 'auto'}}>
              <Link href={'#'}>
              <Button id={props.buttonDesign || 'comparateurButton'} type="submit" className="btn-lg btn-primary" style={{minWidth: 290, height: 60, boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500}}>{"Je m'inscris"} <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Button>
              </Link>
              </div>
          
          </Container>

  )
}

export default Start
import React from "react"
import Link from "next/link"
import {Container, Row, Col} from "react-bootstrap"
import logoBlack from "../images/classement-logo-black.png";
import logoRed from "../images/classement-logo-red.png";
import Image from 'next/image'
import CookieConsent from "react-cookie-consent";

const Footer = (props) => {

        return (
 
          <footer style={{marginTop: 150}}>
          <Container style={{backgroundColor: 'fff', paddingTop: 50, paddingBottom: 150}}>
          <Row style={{maxWidth: 1280, margin: 'auto', height: 100}}>
            <Col>
            <Link href="/"><Image src={props.target==='pro' ?logoRed : logoBlack} alt="logo" width='188px' height='38px'/></Link>
            <p style={{fontSize: 12, color: 'black', marginTop: 20, marginLeft: 0}}>2023 Classement.com © Kohdao Ltd.<br></br> 7 Clapham Park Terrace, SW2 5EA, UK</p>
            <p style={{fontSize: 12, color: 'black', marginTop: 20, marginLeft: 0}}>Registered in England & Wales: 06261702 <br></br>Data Protection Registration No: ZA891746</p>
            </Col>
            <Col id='notMobile'>
              <h5 style={{color: 'black', marginTop: 10}}>Nos classements</h5>
              <ul>
              <li><Link href={'/lave-linge/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Lave-linge </a></Link></li>
              <li><Link href={'/aspirateur/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Aspirateur </a></Link></li>
              <li><Link href={'/lave-vaisselle/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Lave-vaisselle </a></Link></li>
              <li><Link href={'/refrigerateur/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Réfrigérateur </a></Link></li>
              <li><Link href={'/matelas/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Matelas </a></Link></li>
              <li><Link href={'/site-de-rencontre/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Site de rencontre </a></Link></li>
              
              </ul></Col>
              <Col id='notMobile'>
              <h5 style={{color: 'black', marginTop: 10}}>Classements Pro</h5>
              <ul>
              <li><Link href={'/pro/gestion-de-projets/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Gestion de projets </a></Link></li>
              <li><Link href={'/pro/digital-learning/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Digital learning </a></Link></li>
              <li><Link href={'/pro/logiciel-crm/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Logiciel CRM </a></Link></li>
              <li><Link href={'/pro/logiciel-comptabilite/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Logiciel Comptable</a></Link></li>
          
              </ul></Col>
              <Col id='notMobile'>
              <h5 style={{color: 'black', marginTop: 10}}>Qui sommes-nous?</h5>
              <ul>
              <li><Link href={'/contactez-nous/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Contactez-nous </a></Link></li>
              <li><Link href={'/mentions-legales/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Mentions Légales </a></Link></li>
              <li><Link href={'/politique-de-confidentialite/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Politique de confidentialité </a></Link></li>
              
              </ul></Col>
            
          </Row>

          </Container> 
          <CookieConsent location="bottom" buttonText="OK" cookieName="myAwesomeCookieName2" style={{ background: "white", color: 'grey' }} buttonStyle={{ color: "#4e503b", fontSize: "13px" }} expires={150}>Ce site utilise des cookies pour améliorer votre expérience utilisateur.</CookieConsent>
        </footer>


  )
}


export default Footer

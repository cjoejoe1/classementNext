import React from "react"
import Link from "next/link"
import {Container, Row, Col} from "react-bootstrap"
import logoBlack from "../images/classement-logo-black.png";
import Image from 'next/image'

const Footer = (props) => {

        return (

          <footer style={{marginTop: 150}}>
            <Container fluid style={{backgroundColor: 'fff', paddingTop: 50, paddingBottom: 150}}>
            <Row style={{maxWidth: 1280, margin: 'auto', height: 100}}>
              <Col>
              <Link href="/"><Image src={logoBlack} alt="logo" width='188px' height='38px'/></Link>
              <p style={{fontSize: 12, color: 'black', marginTop: 20, marginLeft: 0}}>2023 Classement.com © Kohdao Ltd.<br></br> 7 Clapham Park Terrace, SW2 5EA, UK</p>
              <p style={{fontSize: 12, color: 'black', marginTop: 20, marginLeft: 0}}>Registered in England & Wales: 06261702 <br></br>Data Protection Registration No: ZA891746</p>
              </Col>
              <Col id='notMobile'>
                <h5 style={{color: 'black', marginTop: 10}}>Nos classements</h5>
                <ul>
                <li><Link href={'/createur-de-site/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Créateur de Sites </a></Link></li>
                <li><Link href={'/hebergement-wordpress/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Hébergement Wordpress </a></Link></li>
                <li><Link href={'/logiciel-amazon/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Logiciel Amazon </a></Link></li>
                <li><Link href={'/logiciel-comptabilite/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Logiciel de Comptabilité </a></Link></li>
                <li><Link href={'/logiciel-crm/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Logiciel CRM </a></Link></li>
                </ul></Col>
                <Col id='notMobile'>
                <h5 style={{color: 'black', marginTop: 40}}></h5>
                <ul>
              
                <li><Link href={'/logiciel-seo/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Logiciel SEO </a></Link></li>
                <li><Link href={'/paiement-en-ligne/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Paiement en ligne </a></Link></li>
                <li><Link href={'/hebergement-podcast/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Hébergement podcast </a></Link></li>
                <li><Link href={'/micro-podcast/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Micro podcast </a></Link></li>
                
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
            {/* <CookieConsent location="bottom" buttonText="I understand" cookieName="myAwesomeCookieName2" style={{ background: "#2B373B" }} buttonStyle={{ color: "#4e503b", fontSize: "13px" }} expires={150}>This website uses cookies to enhance the user experience.</CookieConsent> */}
          </footer>

  )
}


export default Footer

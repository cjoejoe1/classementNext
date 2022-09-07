import React from "react"
import Link from "next/link"
import {Container, Row, Col} from "react-bootstrap"
import logoBlack from "../images/stimply-logo-black.png";
import Image from 'next/image'

const Footer = (props) => {

        return (

          <footer style={{marginTop: 150}}>
            <Container fluid style={{backgroundColor: 'fff', paddingTop: 50, paddingBottom: 150}}>
            <Row style={{maxWidth: 1280, margin: 'auto', height: 100}}>
              <Col>
              <Link href="/"><Image src={logoBlack} alt="logo" height="60px" width="188px"/></Link>
              <p style={{fontSize: 12, color: 'black', marginTop: 20, marginLeft: 0}}>2022 Stimply © Kohdao Ltd.<br></br> 7 Clapham Park Terrace, SW2 5EA, UK</p>
              <p style={{fontSize: 12, color: 'black', marginTop: 20, marginLeft: 0}}>Registered in England & Wales: 06261702 <br></br>Data Protection Registration No: ZA557488</p>
              </Col>
              <Col id='notMobile'>
                <h5 style={{color: 'black', marginTop: 10}}>Our Offer</h5>
                <ul>
                <li><Link href={'/how-it-works/'} passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>How it works? </a></Link></li>
                <li><Link href={'/for-who/'} passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>For who? </a></Link></li>
                <li><Link href={'/pricing/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Pricing </a></Link></li>
                </ul></Col>
                <Col id='notMobile'>
                <h5 style={{color: 'black', marginTop: 10}}>About Stimply</h5>
                <ul>
                <li><Link href={'/about-us/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>About Us </a></Link></li>

                <li><Link href={'/contact/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Contact </a></Link></li>
               
                
                </ul></Col>
                <Col id='notMobile'>
                <h5 style={{color: 'black', marginTop: 10}}>Legal</h5>
                <ul>
                <li><Link href={'/privacy-policy/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Privacy Policy </a></Link></li>
                <li><Link href={'/terms-conditions/'}  passHref><a style={{fontSize: 14, color:'black', fontFamily:'Montserrat'}}>Terms & Conditions </a></Link></li>
                
                </ul></Col>
              
            </Row>

            </Container> 
            {/* <CookieConsent location="bottom" buttonText="I understand" cookieName="myAwesomeCookieName2" style={{ background: "#2B373B" }} buttonStyle={{ color: "#4e503b", fontSize: "13px" }} expires={150}>This website uses cookies to enhance the user experience.</CookieConsent> */}
          </footer>

  )
}


export default Footer

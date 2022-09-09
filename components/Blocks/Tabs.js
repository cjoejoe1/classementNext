import React from 'react';
import {Container, Row, Button} from "react-bootstrap"

import {FaEnvelope, FaClone, FaMobileAlt, FaLock, FaEdit, FaUserFriends, FaFacebook, FaGoogle } from 'react-icons/fa'
const Tabs = (props) => {


        return (
     
          <Container fluid style={{paddingTop: 130, paddingBottom: 130, marginBottom: 130, position: 'relative', zIndex: 5, background: '#f7f7fb'}}>
          <h2 className="display-4" style={{textAlign: 'center', marginBottom: 40, fontWeight: 700, fontSize: 60}} data-aos="fade-up" data-aos-duration="750">It's all included.</h2>
          <p className="lead" style={{maxWidth: 800, textAlign: 'center', margin: 'auto', marginBottom: 40}} data-aos="fade-up" data-aos-duration="750">We will do all of this for you!</p>
           
      
            <Row style={{ maxWidth: 1280, margin: 'auto'}} data-aos="fade-up" data-aos-duration="750">
           
              
                  <p className="lead" style={{textAlign: 'center', margin: 'auto', marginBottom: 20, marginTop: 20}}>
                    
                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(240,64,55,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaClone style={{color: '#f04037', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Full Website</h3>
                  </Button>

                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(65,62,101,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaLock style={{color: '#413e65', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Secure Domain Name</h3>
                  </Button>
                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(254,220,90,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaEnvelope style={{color: '#fedc5a', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Professional Email</h3>
                  </Button>
                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(65,62,101,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaMobileAlt style={{color: '#413e65', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Mobile Design</h3>
                  </Button>
                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(240,64,55,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaFacebook style={{color: '#f04037', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Facebook Banner</h3>
                  </Button>
                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(65,62,101,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaGoogle style={{color: '#413e65', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Google Page</h3>
                  </Button>
                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(119,191,65,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaUserFriends style={{color: '#77bf41', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Human Support</h3>
                  </Button>
                  <Button variant="outline-primary" size="lg" id='tabHover'>
                  <div style={{backgroundColor: 'rgba(240,64,55,0.1)', borderRadius:'50%', marginRight: 16, width: 55, height: 55, minWidth: 55, fontSize: 28,float: 'left'}}><FaEdit style={{color: '#f04037', marginTop: 14, marginLeft: 1}} /></div>
                  <h3 style={{color: '#212529', fontSize: 21, fontWeight: 700, letterSpacing: -0.66, lineHeight: '28px', textAlign: 'left', marginTop: 15,}}>Free Updates</h3>
                  </Button>
                  </p> 
          
              </Row>
          </Container>

   
  )
}

export default Tabs
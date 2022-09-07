import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import Image from 'next/image'
import who from '../../images/who.png'
import established from '../../images/established.png'

const Who = (props) => {



  return (


 

          <section style={{backgroundColor: 'rgb(247, 247, 251)'}}>
          <Container style={{maxWidth: 1000, marginTop: 80, marginBottom: 0, paddingTop: 80, paddingBottom: 80}}>

          <h2 className="display-4" style={{textAlign: 'center', marginBottom: 40, fontWeight: 700, fontSize: 60, }}>Who is Stimply?</h2>
     
          <Row >
          <Col style={{minWidth: 350}} id='who'>
        
              <div id='whoImage1' data-aos="fade-right" data-aos-duration="400" style={{borderRadius: 10}}>
       
              <Image src={who} alt='who is stimply'/>
               </div>
       
              <div id='notMobile'  >
                <div style={{borderRadius: 10, marginTop: -350, marginLeft: 273, marginBottom: 118}} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="500">
       
              <Image src={established} alt='established 2007'/>
              </div>

                </div>
       

              </Col>
          <Col style={{maxWidth: 500}} id='who'>
              
              <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 20, }}>Stimply was built by the UK based digital agency Kohdao Limited. We have been growing hundreds of websites in property, shipping, mortgages and finance since 2007. We’re now applying everything we know to help local businesses get the most out of the web.</p>
              <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 20, }}>We love to get to know our clients. So please don’t hesitate to call our team if you have any questions.</p>
              </Col>
            
            </Row>
          
          </Container>

        


          </section>

   
  )
}

export default Who
import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Seo from '../components/seo';
import { TitleBlock } from '../components/common';
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import Image from 'next/image'
import stimplyabout2 from '../images/stimply-about2.jpeg'
import stimplyabout1 from '../images/stimply-about1.jpeg'

function AboutUs(props) {
 

  return (
 
    <Layout path={props.path}>
              <Seo title="Get to know us"/>
              <Breadcrumbs link='/about-us/' text='About us'/>
              <Container style={{ maxWidth: 1310, marginTop: 174}}>
              <TitleBlock><h1>About Us</h1></TitleBlock>
              <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px', textAlign: 'center', marginBottom: 70}}>We’ve been building websites since 2007. Now, we want to do this for you.</p>
              <Row id='mobileSpace' style={{marginTop: 150, marginBottom: 50, maxWidth: 1280, margin: 'auto'}}>
              <Col>
                <TitleBlock><h2 className="display-4" style={{textAlign: 'left', marginBottom: 10, marginTop: -70, fontWeight: 700, fontSize: 60}}>Our mission is to get your business online now.</h2></TitleBlock>
                </Col>
              <Col><p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 10, marginBottom: 50, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px'}}>With Stimply, you will get a high quality website perfect for mobile with your own secure domain name. You will be ready to receive client enquiries and exchange with these clients with your professional email. No surprises, it’s all included.</p></Col>
              </Row>
              <Row id='mobileSpace' style={{marginTop: 50, maxWidth: 1280, margin: 'auto'}}>
              <Col sm={4}>

          <Image src={stimplyabout2} width="350px" height="515px"/>
                </Col>
              <Col sm={8} id='about'>
              <Image src={stimplyabout1}/>
    
                </Col>
              </Row>
                    
              <Row id='mobileSpace' style={{maxWidth: 1280, margin: 'auto', marginTop: 70}}>
                <Col>
                    <p className="lead" style={{textAlign: 'justify', margin: 'auto',  marginBottom: 50, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px'}}>Every day thousands of small businesses offer a fantastic service. The quality of their work is second to none. Their clients love them. But they are not growing enough because they are spending their time on their main activity rather than making sure their business can be seen on the web.</p>
    <p className="lead" style={{textAlign: 'justify', margin: 'auto',  marginBottom: 50, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px'}}>At the same time, other businesses, that offer a very average service, are growing like crazy simply because they are just good at marketing. And that’s a problem!</p>
    <p className="lead" style={{textAlign: 'justify', margin: 'auto',  marginBottom: 50, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px'}}>We’ve been creating websites for our own activities since 2007. Growing businesses in 3 countries, in sectors ranging from removals to mortgages. And over the years, we have learnt how to generate clients from the internet, how to nurture these clients to make sure that they buy, and when they do buy, we make sure they are happy and they recommend us.</p>
    <p className="lead" style={{textAlign: 'justify', margin: 'auto',  marginBottom: 50, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px'}}>Stimply was built to transfer this knowledge and experience over to you. We want you to continue to do what you do best, and let us build your website and guide you through the best practices of being seen on the web.</p>

                    </Col>
                    </Row>
              </Container>
              </Layout>

  )
}

export default AboutUs
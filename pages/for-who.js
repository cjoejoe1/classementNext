import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import Seo from '../components/seo';
import { TitleBlock } from '../components/common';
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import Image from 'next/image'
import architects from '../images/stimply-architects.jpeg'
import builders from '../images/stimply-builders.jpeg'
import cleaners from '../images/stimply-cleaners.jpeg'
import consultants from '../images/stimply-consultants.jpeg'
import decorators from '../images/stimply-decorators.jpeg'
import dogwalkers from '../images/stimply-dog-walkers.jpeg'
import electricians from '../images/stimply-electricians.jpeg'
import locksmiths from '../images/stimply-locksmiths.jpeg'
import pestcontrol from '../images/stimply-pest-control.jpeg'
import plumbers from '../images/stimply-plumbers.jpeg'
import therapists from '../images/stimply-therapists.jpeg'
import movers from '../images/stimply-movers.jpeg'


function AboutUs(props) {

              return (
                <Layout path={props.path}>
              <Seo title="Is Stimply really for you?"/>
        
              <Breadcrumbs link='/for-who/' text='Who is Stimply for?'/>
              <Container fluid style={{marginTop: 174}}>
              <TitleBlock><h1>We Build Websites For</h1></TitleBlock>
              <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px', textAlign: 'center', marginBottom: 70}}>over 100 industries, including:</p>
              <Row id='forWhoMobile' style={{maxWidth: 1280}}>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
 
<Image src={architects} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Architects</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
      
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
   
<Image src={builders} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Builders</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
            
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
   
<Image src={cleaners} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Cleaners</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
          
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>

              <Row id='forWhoMobile' style={{maxWidth: 1280}}>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
      
<Image src={consultants} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Consultants</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
              
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
      
<Image src={decorators} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Decorators</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
   
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover'className='cardMobile'>
   
<Image src={dogwalkers} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Dog Walkers</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
            
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>

              <Row id='forWhoMobile' style={{maxWidth: 1280}}>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
      
<Image src={electricians} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Electricians</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
                
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
      
<Image src={locksmiths} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Locksmiths</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover'className='cardMobile'>

<Image src={pestcontrol} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Pest Control</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
                
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>

              <Row id='forWhoMobile' style={{maxWidth: 1280, margin: 'auto', marginBottom: 50}}>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>
  
<Image src={movers} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Removal Companies</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
                
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover' className='cardMobile'>

<Image src={plumbers} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Plumbers</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card id='forWhoHover'className='cardMobile'>

<Image src={therapists} style={{borderRadius: 5}} placeholder="blur" priority={true}/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 24}}><b>Therapists</b></Card.Title>
                    <Card.Text style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 10}}>
                
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
   
              </Container>
      
              </Layout>
  )
}

export default AboutUs
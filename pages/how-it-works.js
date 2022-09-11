import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Seo from '../components/seo';
import { TitleBlock } from '../components/common';
import { Title } from "../components/Core";
import Image from 'next/image'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import answer from '../images/stimply-answer.png'
import stimplybuild from '../images/stimply-build3.png'
import stimplywebsite from '../images/stimply-website2.png'
function HowItWorks(props) {

  return (

    <Layout path={props.path}>
    
              <Seo title="How does Stimply work?"/>
              <Breadcrumbs link='/how-it-works/' text='How it works?'/>
              <Container style={{ maxWidth: 1260, marginTop: 174}}>
              <TitleBlock><h1>How It Works</h1></TitleBlock>
              <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px', textAlign: 'center', marginBottom: 70, maxWidth: 800}}>We do need information from you to build your website. But this is information that you know. It’s your name, your telephone, and the services that you offer.</p>


              <Row style={{maxWidth: 1000, margin: 'auto', marginBottom: 70, marginTop: 130}}>

              <div className='col-sm-6 order-md-2 order-sm-6' >
                      <h5 style={{fontWeight: 700}}>Step 1</h5>
                      <h2 style={{fontSize: 60}} id="forWho">
                    A few quick
                    <br></br>
                    questions.
                  </h2>
                      <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
                  letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 30}}>We just need your business name and your activity. With this information, we can start building your website, creating your logo and adding content. </p>
                </div>

                <Col>

          

                <Image src={answer} width="350px" height="350px" placeholder="blur" priority={true}/>

            
                </Col>

              </Row>


              <Row style={{maxWidth: 1000, margin: 'auto', marginBottom: 70, marginTop: 130}}>
              
              <div className='col-sm-6 order-md-2 order-sm-6' >
                 <h5 style={{fontWeight: 700}}>Step2</h5>
                <h2 style={{fontSize: 60}} id="forWho">
                We get to work (24 hours).
                <br className="d-none d-sm-block d-md-none d-xl-block" />
               
              </h2>
                  <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
              letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 30}}>If you like what you see, your website will be up and running within 24 hours. And if you’d like to make changes, you can edit the text yourself or simply give us a call and we’ll do it for you. </p>
              </div>
              <Col sm={6}>
             
            <Image src={stimplybuild} width="350px" height="350px" placeholder="blur" priority={true}/>
              </Col>
              </Row>

              <Row style={{maxWidth: 1000, margin: 'auto', marginBottom: 70, marginTop: 130}}>
              
              <div className='col-sm-6 order-md-2 order-sm-6' >
                <h5 style={{fontWeight: 700}}>Step 3</h5>
                <h2 style={{fontSize: 60}} id="forWho">
                Enjoy your
                <br className="d-none d-sm-block d-md-none d-xl-block" />
                new website!
              </h2>
                  <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
              letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 30}}>Choose your domain name or transfer one if you have one already. Remember this is all included in the price and we’ll do everything for you.</p>
              </div>
              
              <Col sm={6} >
 

<Image src={stimplywebsite} width="350px" height="350px" placeholder="blur" priority={true}/>


                                </Col>
              </Row>

              <Row style={{maxWidth: 1000, margin: 'auto'}}>
              <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
              letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 30}}>And that’s it! Your website will be ready to receive new clients.</p>
              <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
              letterSpacing: -0.66, lineHeight: '38px', textAlign: 'justify', marginBottom: 30}}>We have done this so many times before. We know exactly what is needed, what is important and what is not. No time wasted, your very own website will be up and running in no time.</p>
         
              </Row>

              </Container>
              </Layout>
              )

}

export default HowItWorks
import React from 'react';
import {Row, Col, Container } from "react-bootstrap"

import HeroForm from './HeroForm'
import styled from 'styled-components'
import Image from 'next/image'
import background from '../../images/stimply-background.jpeg'

  const HeroLong = ({ className }) => {

    return (

      <Container fluid style={{background: 'rgb(34, 49, 81)', marginTop: 0, paddingLeft: 0, paddingRight: 0, position: 'relative'}}>


 <div className='heroPic' style={{height: '100vh', maxHeight: 950, minHeight: 617, justifyContent: 'center',  alignItems: 'center', position: 'relative', opacity: 0.9}}>

     
     <Image src={background} alt='stimply background' priority={true} placeholder="blur"/>
  



</div>

        <Row style={{maxWidth: 1280, marginTop: -650, paddingBottom: 150}} id='heroLong'  data-aos="fade-right" data-aos-duration="500">
     
            {/* <Col sm={12} style={{padding: 50, marginTop: 50, paddingBottom: 50}}   id='colHero'> */}
            
              <HeroForm />
             
              {/* </Col> */}
           
            {/* <Col id='manMobile' > */}
             
            {/* <Img fixed={manData} style={{height: 800, marginTop: 137, zIndex: 0, position: 'relative'}} id='notMobile' ></Img> */}
            {/* <div style={{height: 630, marginTop: 0, zIndex: 0, position: 'relative'}}>
            <Link to={'/pricing/'}>
            <StaticImage
  src='../../images/stimply-man.png'
  width={430}
  placeholder='tracedSVG'
/>
</Link>
</div> */}

              {/* </Col> */}
          </Row>
        </Container> 

    )
  }
  
  const StyledBackgroundSection = styled(HeroLong)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `
  
  export default StyledBackgroundSection

  


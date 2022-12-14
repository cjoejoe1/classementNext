import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Link from 'next/link'
import Image from 'next/image'
import {FaToolbox} from 'react-icons/fa'

import {
  Title,
  Section,
  Box,
  Text,
} from "../../components/Core";

import { device } from "../../utils";


const SectionStyled = styled(Section)`
background: rgb(243,243,243);
  background-size: cover;
  background-position: bottom left;

  @media ${device.lg} {
    background-position: center;
  }
`;

// const ImageTop = styled(Box)`
//   border: 10px solid transparent;
//   box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
//   position: absolute;
//   top: -11%;
//   left: -13%;
//   border-radius: 50%;
//   overflow: hidden;

//   @media ${device.lg} {
//     left: 2%;
//   }
// `;

// const ImageBottom = styled(Box)`
//   position: absolute;
//   right: -13%;
//   top: 54%;

//   @media ${device.lg} {
//     right: -23%;
//   }
//   @media ${device.xl} {
//     right: -28%;
//   }
// `;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
     
      <SectionStyled>
      <Container style={{maxWidth: 1280}}>


  </Container> 
        <div className="pt-5"></div>
        <Container>
     

          <Row>
            
            <Col className="order-2" id='heroImage' style={{marginTop: 50}}>
              {/* <Link to={'/kit/hebergement-podcast/'}> */}
           <FaToolbox style={{fontSize: 300, color: '#f00057'}}/>
            {/* </Link> */}
            </Col>

            
            <Col
              md="9"
              lg="7"
              className="order-1"
              // data-aos="fade-right"
              // data-aos-duration="650"
              // data-aos-delay="0"
              data-aos-once="true"
            >
              <Box py={[null, null, null, 5]} pr={5} pt={[4, null]} id='heroBox'>
                <Title variant="hero" style={{marginTop: 0, color: 'rgb(28, 45, 53)'}} id='heroTitle'>
                  Découvrez Le Kit Du Créateur💡
                </Title>
                <Text mb={4} id='heroParaf'>
                Retrouvez les meilleurs services d'hébergements pour vos podcasts classés par tarifs et fonctionalités.  
                   
                </Text>
                {/* <Link to={'/kit/hebergement-podcast/'}>
                <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 60, backgroundColor: '#e4234f', borderColor: '#e4234f'}}>Je Compare <FontAwesomeIcon icon={faAngleDoubleRight} style={{marginTop: 5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Bs.Button>
                </Link> */}
               


              </Box>
            </Col>
          
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

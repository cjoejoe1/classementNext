import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link  from 'next/link'
import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import { FaAmazon, FaWordpress, FaDesktop, FaFilter, FaMicrophone, FaMicrophoneAlt, FaSortAmountUpAlt, FaCreditCard, FaFileInvoice} from 'react-icons/fa'




const Content2 = () => (
  <>
    {/* <!-- Content section --> */}
    <Section className="position-relative">
      <Container id='indexBlogList'>
        {/* <h2 style={{textAlign: 'center', marginBottom: 50, fontSize: 50, fontWeight: 800, color: '#1c2d35'}}>Nos comparatifs</h2> */}
        <Row className="align-items-center">
       
       <Col> 

<Link href={'/kit/createur-de-site/'} id='textOnHover' passHref >
  <Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgba(240,64,55,0.1)'}} mr={3} >
      <FaDesktop  style={{color: '#e4234f'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
      Créateur de Sites
      </Title>
<Text>comparatif complet</Text>
    </div>
  </Box></Link>

  <Link href={'/kit/hebergement-wordpress/'} id='textOnHover' passHref >
    <a style={{textDecoration: 'none', color: 'black'}}>
    <Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgba(240,64,55,0.1)'}} mr={3} >
      <FaWordpress style={{color: '#e4234f'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
    Hébergement Wordpress
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box>
  </a>
  </Link>

  <Link href={'/kit/micro-podcast/'} id='textOnHover' passHref >
  <a style={{textDecoration: 'none', color: 'black'}}>
    <Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgba(65, 62, 101, 0.1)'}} mr={3} >
      <FaMicrophone style={{color: 'rgb(33, 37, 41)'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
    Micro Podcast
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box>
  </a></Link>


                  </Col>
       <Col> 
       
       <Link href={'/kit/logiciel-amazon/'} id='textOnHover' passHref >
       <a style={{textDecoration: 'none', color: 'black'}}><Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgb(242 248 237)'}} mr={3} >
      <FaAmazon style={{color: 'rgb(119 191 65)'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
     Logiciel Amazon
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box>
  </a></Link>

  <Link href={'/kit/logiciel-comptabilite/'} id='textOnHover' passHref >
  <a style={{textDecoration: 'none', color: 'black'}}><Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgb(253 211 49 / 19%)'}} mr={3} >
      <FaFileInvoice  style={{color: 'rgb(254, 220, 90)'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
    Logiciel Comptable
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box>  </a></Link>

  <Link href={'/kit/hebergement-podcast/'} id='textOnHover' passHref >
  <a style={{textDecoration: 'none', color: 'black'}}><Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
  <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgba(65, 62, 101, 0.1)'}} mr={3} >
      <FaMicrophoneAlt  style={{color: 'rgb(33, 37, 41)'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
    Hébergement Podcast
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box>
  </a></Link>

       
       
       
       
       
     
                  </Col>
       <Col>
       
       
       <Link href={'/kit/logiciel-crm/'} id='textOnHover' passHref >
       <a style={{textDecoration: 'none', color: 'black'}}><Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgb(253 211 49 / 19%)'}} mr={3} >
      <FaFilter style={{color: 'rgb(254, 220, 90)'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
     Logiciel CRM
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box> 
  </a></Link>

  <Link href={'/kit/logiciel-seo/'} id='textOnHover' passHref > 
  <a style={{textDecoration: 'none', color: 'black'}}><Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgb(242 248 237)'}} mr={3} >
      <FaSortAmountUpAlt  style={{color: 'rgb(119 191 65)'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
    Logiciel SEO
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box>
  </a></Link>

  <Link href={'/kit/paiement-en-ligne/'} id='textOnHover' passHref >
  <a style={{textDecoration: 'none', color: 'black'}}><Box width={360} id='iconBox' bg="light" border="1px solid" borderColor="border" p="20px" style={{marginBottom: 20, cursor: 'pointer'}} borderRadius={10} className={`d-flex`} css={`min-width: 100%;width: 100%;@media ${device.sm} {width: 360px;min-width: 360px;}`}>
    <Box size={55} minWidth={55} borderRadius="50%" color={'red'} fontSize="28px" className="d-flex justify-content-center align-items-center"
    style={{backgroundColor: 'rgba(240,64,55,0.1)'}} mr={3} >
      <FaCreditCard  style={{color: '#e4234f'}}/>
    </Box>
    <div><Title variant="card" mb={0} style={{marginTop: 0}}>
    Paiement en Ligne
      </Title>
      <Text>comparatif complet</Text>
    </div>
  </Box>
  </a></Link>



    
                  </Col>
               
          
        
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;

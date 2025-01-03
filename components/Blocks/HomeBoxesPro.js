
import {useState} from 'react'
import { Row, Col, Button, Card, Badge, Container} from "react-bootstrap";
import { PostVC} from "../../components/Core";
import Link from "next/link"
import Image from "next/image"
import Newsletter from '../../components/Newsletter'
import { Title } from "../../components/Core";
import { FaAmazon, FaWordpress, FaDesktop, FaRegBuilding, FaFilter, FaMicrophone, FaMicrophoneAlt, FaSortAmountUpAlt, FaCreditCard, FaFileInvoice, FaRobot, FaAlignLeft, FaVideo, FaPenAlt} from 'react-icons/fa'

const Latest = (props) => {



  
  var d = new Date();
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var n = month[d.getMonth()];
  var y = d.getFullYear();


  
  return (
    <>

<Container fluid style={{ margin: 'auto', position: 'relative', zIndex: 5, background: 'white', paddingTop: 30, marginBottom: 100}} id='compareBoxes'>
<Row style={{maxWidth: 1140, margin: 'auto', marginTop: 50, marginBottom: 0 }} id="noMobile">
  {/* <Col lg={6}>
  <Link href={`/pro/site-internet/`} id='textOnHover' passHref>
    <a id='tabLink'>
<div style={{marginTop: 0, background: 'white'}}>
      
        <div style={{ minHeight: 165, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
       
          <>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Site Internet</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de créateurs de sites de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaDesktop  style={{color: '#dc3545', fontSize: 100, marginTop: 40}}/>
        </div>
        </>
       
        </div>
    
    </div></a>
    </Link>
    </Col> */}
    <Col lg={6}>
  <Link href={`/pro/gestion-de-projets/`} id='textOnHover' passHref>
    <a id='tabLink'>
<div style={{marginTop: 0, background: 'white'}}>
      
        <div style={{ minHeight: 165, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
       
          <>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Gestion de Projets</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs logiciels de gestion de projets.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaAlignLeft  style={{color: '#dc3545', fontSize: 100, marginTop: 40}}/>
        </div>
        </>
       
        </div>
    
    </div></a>
    </Link>
    </Col>
    <Col lg={6}>
  <Link href={`/pro/digital-learning/`} id='textOnHover'>
  <a id='tabLink'>
  <div style={{marginTop: 0, background: 'white'}}>
    
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Digital Learning</h2>
        <p id="pFundingBlock">{"Meilleures solutions de digital learning de 2025." || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaRegBuilding  style={{color: '#dc3545', fontSize: 80, marginTop: 40, marginLeft: 20}}/>
        </div>
        </div>

    </div>
    </a>
    </Link>
  </Col>
    <Col lg={6}>
  <Link href={`/pro/ia/texte/`} id='textOnHover'>
  <a id='tabLink'>
  <div style={{marginTop: 10, background: 'white'}}>
    
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Créateur Texte IA</h2>
        <p id="pFundingBlock">{"Meilleurs offres de créateur de textes de 2025." || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaPenAlt  style={{color: '#dc3545', fontSize: 80, marginTop: 40, marginLeft: 20}}/>
        </div>
        </div>

    </div>
    </a>
    </Link>
  </Col>

  <Col lg={6}>
  <Link href={`/pro/ia/video/`} id='textOnHover'>
  <a id='tabLink'>
  <div style={{marginTop: 10, background: 'white'}}>
    
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Créateur Vidéo IA</h2>
        <p id="pFundingBlock">{"Meilleurs offres de créateurs de vidéos de 2025." || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaVideo  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>

    </div>
    </a>
    </Link>
  </Col>



    <Col lg={6}>
    <Link href={`/pro/logiciel-crm/`} id='textOnHover'>
    <a id='tabLink'>
  <div style={{marginTop: 10, background: 'white'}}>
      
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30,paddingBottom : 16, justifyContent: 'space-between'}} id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel CRM</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels CRM de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaFilter  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      
    </div>
    </a>
    </Link>
    </Col>
    <Col lg={6}>
    <Link href={`/pro/logiciel-comptabilite/`} id='textOnHover'>
    <a id='tabLink'>
    <div style={{marginTop: 10, background: 'white'}}>
     
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel Comptable</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels comptables de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaFileInvoice  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
   
    </div>
    </a>
    </Link>
</Col>

    
<Col lg={6}>
<Link href={`/pro/logiciel-seo/`} id='textOnHover'>
<a id='tabLink'>
  <div style={{marginTop: 10, background: 'white'}}>
      
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 14, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel SEO</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels SEO de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaSortAmountUpAlt  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
 
    </div>
    </a>
    </Link>
  
  </Col>




<Col lg={6}>
<Link href={`/pro/micro-podcast/`} id='textOnHover'>
<a id='tabLink'>
  <div style={{marginTop: 10, background: 'white'}}>

        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Micro Podcast</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de micros podcasts de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaMicrophone  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
  
    </div>
    </a>
    </Link>
    


  </Col>
  <Col lg={6}>
  <Link href={`/pro/logiciel-amazon/`} id='textOnHover'>
  <a id='tabLink'>
<div style={{marginTop: 10, background: 'white'}}>
   
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel Amazon</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels amazon de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaAmazon  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
  
    </div></a>
    </Link>
</Col>
<Col lg={6}>
  <div style={{marginTop: 10, background: 'white'}}>
      <Link href={`/pro/hebergement-wordpress/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Hébergement Wordpress</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de hébergement Wordpress de 2025.' || ''}</p>
        </div>
        <div >
        <FaWordpress  style={{color: '#dc3545', fontSize: 100, marginTop: 30, marginLeft: -30}}/>
        </div>
        </div>
      </Link>
    </div>

    


  </Col>

  <Col lg={6}>
  <Link href={`/pro/hebergement-podcast/`} id='textOnHover'>
  <a id='tabLink'>
<div style={{marginTop: 10, background: 'white'}}>
    
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Hébergement Podcast</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de hébergement podcast de 2025.' || ''}</p>
        </div>
        <div style={{ marginLeft: -30}}>
        <FaMicrophoneAlt  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
  
    </div>
    </a>
    </Link>
</Col>
  <Col lg={6}>
  <Link href={`/pro/paiement-en-ligne/`} id='textOnHover'>
  <a id='tabLink'>
  <div style={{marginTop: 10, background: 'white'}}>
    
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Paiement en Ligne</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de paiement en ligne de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaCreditCard  style={{color: '#dc3545', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>

    </div>
    </a>
    </Link>
    


  </Col>


            </Row>


          <Row style={{maxWidth: 1140, margin: 'auto', marginTop: 50, marginBottom: 0 }} id="noDesktop" >
  
   
  <Col lg={6}>
    <Link href={`/pro/gestion-de-projets/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
      
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaAlignLeft  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Gestion de Projets</h2>
            </div>
            </div>
       
        </div>
        </a>
        </Link>
    </Col>
    <Col lg={6}>
    <Link href={`/pro/digital-learning/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
      
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaRegBuilding  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Digital Learning</h2>
            </div>
            </div>
       
        </div>
        </a>
        </Link>
    </Col>
    <Col lg={6}>
    <Link href={`/pro/logiciel-crm/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
      
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaFilter  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel CRM</h2>
            </div>
            </div>
       
        </div>
        </a>
        </Link>
    </Col>


    <Col lg={6}>
    <Link href={`/pro/logiciel-comptabilite/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
         
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaFileInvoice  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel Comptabilité</h2>
            </div>
            </div>
          
        </div>
        </a>
        </Link>
    </Col>

    
    <Col lg={6}>
    <Link href={`/pro/logiciel-seo/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>

            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaSortAmountUpAlt  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel SEO</h2>
            </div>
            </div>
            
        </div>
        </a>
        </Link>
    </Col>





    <Col lg={6}>
    <Link href={`/pro/micro-podcast/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
       
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaMicrophone  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Micro Podcast</h2>
            </div>
            </div>
           
        </div>
        </a>
        </Link>
    </Col>
    <Col lg={6}>
    <Link href={`/pro/logiciel-amazon/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
        
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaAmazon  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Logiciel Amazon</h2>
            </div>
            </div>
            
        </div>
        </a>
        </Link>
    </Col>
    <Col lg={6}>
    <Link href={`/pro/hebergement-wordpress/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
         
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaWordpress  style={{color: '#dc3545', fontSize: 40, marginTop: 30}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: -10}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Hébergement Wordpress</h2>
            </div>
            </div>
        
        </div>
        </a>
        </Link>
    </Col>

    <Col lg={6}>
    <Link href={`/pro/hebergement-podcast/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
       
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaMicrophoneAlt  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Hébergement Podcast</h2>
            </div>
            </div>
           
        </div>
        </a>
        </Link>
    </Col>
    <Col lg={6}>
    <Link href={`/pro/paiement-en-ligne/`} id='textOnHover'>
    <a id='tabLink'>
      <div style={{marginTop: 0, background: 'white'}}>
         
            <div style={{borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30}} id='cardOnHoverMarket'>
          
            <div style={{maxWidth: 40, minWidth: 40, marginLeft: -20}}>
            <FaCreditCard  style={{color: '#dc3545', fontSize: 40, marginTop: 20}}/>
            </div>
            <div style={{marginLeft: 20, marginTop: 0}}>
            <h2 id="homeboxesh2" style={{fontFamily: 'Montserrat'}}>Paiement en Ligne</h2>
            </div>
            </div>
       
        </div>
        </a>
        </Link>
    </Col>

    


            </Row>
  

            
</Container>
 
</>
  )
}




export default Latest


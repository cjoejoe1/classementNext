
import {useState} from 'react'
import { Row, Col, Button, Card, Badge} from "react-bootstrap";
import { PostVC} from "../../components/Core";
import Link from "next/link"
import Image from "next/image"
import Newsletter from '../../components/Newsletter'
import { Title } from "../../components/Core";
import { FaAmazon, FaWordpress, FaDesktop, FaFilter, FaMicrophone, FaMicrophoneAlt, FaSortAmountUpAlt, FaCreditCard, FaFileInvoice} from 'react-icons/fa'

const Latest = (props) => {



  
  var d = new Date();
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var n = month[d.getMonth()];
  var y = d.getFullYear();


  
  return (
    <>

 
<Row style={{marginTop: 50, marginBottom: 0, maxWidth: 1140}} >
  <Col>
      <div style={{marginTop: 0}}>
      <Link href={`/createur-de-site/`} id='textOnHover'>
      <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30,  paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaDesktop  style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Créateur de Sites</span>
        {/* <p id="pFundingBlock">{'Comparatif des meilleurs offres de créateurs de sites de 2023.' || ''}</p> */}
        </div>
       
        </div>
      </Link>
    </div>
    </Col>

    <Col>
      <div style={{marginTop: 0}}>
      <Link href={`/logiciel-crm/`} id='textOnHover'>
      <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30,  paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaFilter style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Logiciels<br></br> CRM</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>
   
    {/* <Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/logiciel-crm/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}} id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Logiciel CRM</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels CRM de 2023.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaFilter  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      </Link>
    </div>
    </Col> */}

<Col >
      <div style={{marginTop: 0}}>
      <Link href={`/logiciel-comptabilite/`} id='textOnHover'>
        <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30, paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaFileInvoice style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Logiciels<br></br> Comptabilité</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>


    {/* <Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/logiciel-comptabilite/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Logiciel Comptable</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels comptables de 2023.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaFileInvoice  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      </Link>
    </div>
</Col> */}

    
<Col >
      <div style={{marginTop: 0}}>
      <Link href={`/logiciel-seo/`} id='textOnHover'>
        <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30, paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaSortAmountUpAlt style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Logiciels<br></br> SEO</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>



{/* <Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/logiciel-seo/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 14, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Logiciel SEO</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels SEO de 2023.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaSortAmountUpAlt  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      </Link>
    </div>

  
  </Col> */}


<Col >
      <div style={{marginTop: 0}}>
      <Link href={`/micro-podcast/`} id='textOnHover'>
        <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30, paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaMicrophone style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Micro<br></br> Podcast</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>

{/* <Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/micro-podcast/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Micro Podcast</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de micros podcats de 2023.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaMicrophone  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      </Link>
    </div>

    


  </Col> */}


<Col >
      <div style={{marginTop: 0}}>
      <Link href={`/logiciel-amazon/`} id='textOnHover'>
        <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30, paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaAmazon style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Logiciel<br></br> Amazon</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>



  {/* <Col lg={6}>

    
<div style={{marginTop: 10}}>
      <Link href={`/logiciel-amazon/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 25, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Logiciel Amazon</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de logiciels amazon de 2023.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaAmazon  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      </Link>
    </div>
</Col> */}

<Col sm={2}>
      <div style={{marginTop: 0}}>
      <Link href={`/hebergement-wordpress/`} id='textOnHover'>
        <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30, paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaWordpress style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Hébergement<br></br>Wordpress</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>


{/* <Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/hebergement-wordpress/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Hébergement Wordpress</h2>
        <p id="pFundingBlock">{'Hébergement wordpress de 2023.' || ''}</p>
        </div>
        <div >
        <FaWordpress  style={{color: '#0074C6', fontSize: 100, marginTop: 30, marginLeft: -30}}/>
        </div>
        </div>
      </Link>
    </div>

    


  </Col> */}

<Col sm={2}>
      <div style={{marginTop: 0}}>
      <Link href={`/hebergement-podcast/`} id='textOnHover'>
        <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30, paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaMicrophoneAlt style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Hébergement<br></br>Podcast</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>

{/* 
  <Col lg={6}>
<div style={{marginTop: 0}}>
      <Link href={`/hebergement-podcast/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 25, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Hébergement Podcast</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de hébergement podcast de 2023.' || ''}</p>
        </div>
        <div style={{ marginLeft: -30}}>
        <FaMicrophoneAlt  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      </Link>
    </div>
</Col> */}

<Col sm={2}>
      <div style={{marginTop: 0}}>
      <Link href={`/paiement-en-ligne/`} id='textOnHover'>
        <div style={{ height: 170, minWidth: 150, width: 60, borderRadius: 30, paddingLeft: 10, paddingRight: 10, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth:60, height: 60, marginRight: 0, borderRadius: 50,border:'1px solid rgba(0,0,0,.125', background: 'white', textAlign: 'center', margin: 'auto'}}>
        <FaCreditCard style={{color: '#0074C6', fontSize: 30, marginTop: 15}}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <span style={{textAlign: 'center', fontWeight: 700}}>Paiement<br></br>en ligne</span>

        </div>
       
        </div>
      </Link>
    </div>
    </Col>



  {/* <Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/paiement-en-ligne/`} id='textOnHover'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 20, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Paiement en Ligne</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs offres de paiement en ligne de 2023.' || ''}</p>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaCreditCard  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
      </Link>
    </div>

    


  </Col> */}


            </Row>

            {/* <Row style={{marginTop: 50, marginBottom: 0, maxWidth: 1268}} id="noLarge">


            <Col lg={6}>
  
  <div style={{marginTop: 0}}>
        <Link href={`/createur-de-site/`} id='textOnHover'>
        <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >
  
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div style={{paddingRight: 20, paddingTop: 10}}>
          <h2 style={{fontFamily: 'Montserrat'}}>Créateur de Sites</h2>
          </div>
          <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
          <FaDesktop  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
          </div>
  
          </div>
          <p id="pFundingBlock">{'Receive a list of UK venture capital firms (pre-seed, seed and series A).' || ''}</p>
          </div>
        </Link>
      </div>
      </Col>

      <Col lg={6}>
  
  <div style={{marginTop: 0}}>
        <Link href={`/logiciel-crm/`} id='textOnHover'>
        <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >
  
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div style={{paddingRight: 20, paddingTop: 10}}>
          <h2 style={{fontFamily: 'Montserrat'}}>Logiciel CRM</h2>
          </div>
          <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
          <FaFilter  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
          </div>
  
          </div>
          <p id="pFundingBlock">{'Receive a list of UK venture capital firms (pre-seed, seed and series A).' || ''}</p>
          </div>
        </Link>
      </div>
      </Col>

      <Col lg={6}>
  
  <div style={{marginTop: 0}}>
        <Link href={`/logiciel-comptabilite/`} id='textOnHover'>
        <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >
  
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div style={{paddingRight: 20, paddingTop: 10}}>
          <h2 style={{fontFamily: 'Montserrat'}}>Logiciel Comptable</h2>
          </div>
          <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
          <FaFileInvoice  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
          </div>
  
          </div>
          <p id="pFundingBlock">{'Receive a list of UK venture capital firms (pre-seed, seed and series A).' || ''}</p>
          </div>
        </Link>
      </div>
      </Col>

  <Col lg={6}>
  
<div style={{marginTop: 0}}>
      <Link href={`/logiciel-seo/`} id='textOnHover'>
      <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >

        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{paddingRight: 20, paddingTop: 10}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Logiciel SEO</h2>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaSortAmountUpAlt  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>

        </div>
        <p id="pFundingBlock">{'Receive a list of UK venture capital firms (pre-seed, seed and series A).' || ''}</p>
        </div>
      </Link>
    </div>
    </Col>
    
    <Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/hebergement-podcast/`} id='textOnHover'>
      <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >

<div style={{ display: 'flex', justifyContent: 'space-between'}}>
<div style={{paddingRight: 20, paddingTop: 10}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Hébergement Podcast</h2>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaMicrophoneAlt  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
        <p id="pFundingBlock">Search for your perfect hotdesk, dedicated desk and private offices.</p>
        </div>
      </Link>
    </div>
    </Col>
    <Col lg={6}>
    <div style={{marginTop: 0}}>
      <Link href={`/micro-podcast/`} id='textOnHover'>
<div style={{borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >
        <div style={{  display: 'flex', justifyContent: 'space-between'}}  >
        <div style={{paddingRight: 20, paddingTop: 10}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Micro Podcast </h2>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaMicrophone  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>

        </div>
        <p id="pFundingBlock">Sit back and relax while we build your website. <span style={{}}>This is not a website builder</span>.</p>
        </div>
      </Link>
    </div>
</Col>
<Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/logiciel-amazon/`} id='textOnHover'>
      <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >

<div style={{ display: 'flex', justifyContent: 'space-between'}}>
<div style={{paddingRight: 20, paddingTop: 10}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Logiciel Amazon</h2>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaAmazon  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
        <p id="pFundingBlock">We've listed hundreds of business ideas to launch in the UK in 2023.</p>
        </div>
      </Link>
    </div>

  
  </Col>



  <Col lg={6}>
<div style={{marginTop: 10}}>
      <Link href={`/hebergement-wordpress/`} id='textOnHover'>
      <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >

<div style={{ display: 'flex', justifyContent: 'space-between'}}>
<div style={{paddingRight: 20, paddingTop: 10}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Hébergement Wordpress</h2>
        </div>
        <div style={{maxWidth: 140, minWidth: 140, marginRight: -20}}>
        <FaWordpress  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
        <p id="pFundingBlock">Valuations, brokers and listings. Get the best price for your business.</p>
        </div>
      </Link>
    </div>
</Col>
<Col lg={6}>
  <div style={{marginTop: 10}}>
      <Link href={`/paiement-en-ligne/`} id='textOnHover'>
      <div style={{minHeight: 165, borderRadius: 5, paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, }} id='cardOnHoverMarket' >

<div style={{ display: 'flex', justifyContent: 'space-between'}}>
<div style={{paddingRight: 20, paddingTop: 10}}>
        <h2 style={{fontFamily: 'Montserrat'}}>Paiement en Ligne</h2>
        </div>
        <div style={{maxWidth: 140, minWidth: 140}}>
        <FaCreditCard  style={{color: '#0074C6', fontSize: 100, marginTop: 30}}/>
        </div>
        </div>
        <p id="pFundingBlock">From website builders to SEO, find the best software for your business.</p>
        </div>
      </Link>
    </div>

    


  </Col>
            </Row> */}

 
</>
  )
}




export default Latest


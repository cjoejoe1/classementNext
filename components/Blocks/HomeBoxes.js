

import { Row, Col, Container} from "react-bootstrap";
import Link from "next/link"
import Image from "next/image"
import lavevaisselle from '../../images/lave-vaisselle.png'
import refrigerateur from '../../images/refrigerateur.png'
import sitederencontre from '../../images/site-de-rencontre.png'
import matelas from '../../images/matelas.png'
import aspirateur from '../../images/aspirateur.png'
import lavelinge from '../../images/lave-linge.png'
const Latest = (props) => {

  
  var d = new Date();
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var n = month[d.getMonth()];
  var y = d.getFullYear();


  
  return (
<Container style={{maxWidth: 1140}}>
<Row id="min992" style={{marginTop: 20, marginBottom: 0}} >

   
    <Col lg={6}>
  <div style={{marginTop: 10}}>

      <Link href={`/lave-linge/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}} id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id='homeboxesh2' style={{fontFamily: 'Montserrat'}}>Lave-linge</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs lave-linge de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 250, minWidth: 140, marginRight: -50}}>
          <Image src={lavelinge} width={600} height={400}/>
        </div>
        </div>
        </a>
      </Link>
    </div>
    </Col>



    <Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/aspirateur/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Aspirateur</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs aspirateurs de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 250, minWidth: 140, marginRight: -50}}>
          <Image src={aspirateur} width={600} height={400}/>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>


<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/lave-vaisselle/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Lave-vaisselle</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs lave-vaisselle de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 250, minWidth: 140, marginRight: -50}}>
          <Image src={lavevaisselle} width={600} height={400}/>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>

<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/refrigerateur/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Réfrigérateur</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs réfrigérateurs de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 250, minWidth: 140, marginRight: -50}}>
          <Image src={refrigerateur} width={600} height={400}/>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>

<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/site-de-rencontre/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Site de rencontre</h2>
        <p id="pFundingBlock">{'Comparatif des sites de rencontre de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 250, minWidth: 140, marginRight: -50}}>
          <Image src={sitederencontre} width={600} height={400}/>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>

<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/matelas/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 163, borderRadius: 5, display: 'flex', paddingLeft: 40, paddingRight: 30, paddingTop: 25, paddingBottom : 16, justifyContent: 'space-between'}}  id='cardOnHoverMarket'>
        <div style={{paddingRight: 20}}>
        <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Matelas</h2>
        <p id="pFundingBlock">{'Comparatif des meilleurs matelas de 2025.' || ''}</p>
        </div>
        <div style={{maxWidth: 250, minWidth: 140, marginRight: -50}}>
          <Image src={matelas} width={600} height={400}/>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>
</Row>
<Row id="max992" style={{marginTop: 20, marginBottom: 0}} >

<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/lave-linge/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 100, borderRadius: 5, display: 'flex', paddingLeft: 20, paddingRight: 30, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth: 100, minWidth: 100}}>
          <Image src={lavelinge} width={600} height={400}/>
        </div>
        <div style={{marginTop: -7, marginLeft: -3}}>
          <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Lave-linge</h2>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>
<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/aspirateur/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 100, borderRadius: 5, display: 'flex', paddingLeft: 20, paddingRight: 30, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth: 100, minWidth: 100}}>
          <Image src={aspirateur} width={600} height={400}/>
        </div>
        <div style={{marginTop: -7, marginLeft: -3}}>
          <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Aspirateur</h2>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>
<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/lave-vaisselle/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 100, borderRadius: 5, display: 'flex', paddingLeft: 20, paddingRight: 30, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth: 100, minWidth: 100}}>
          <Image src={lavevaisselle} width={600} height={400}/>
        </div>
        <div style={{marginTop: -7, marginLeft: -3}}>
          <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Lave-vaisselle</h2>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>
<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/refrigerateur/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 100, borderRadius: 5, display: 'flex', paddingLeft: 20, paddingRight: 30, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth: 100, minWidth: 100}}>
          <Image src={refrigerateur} width={600} height={400}/>
        </div>
        <div style={{marginTop: -7, marginLeft: -3}}>
          <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Réfrigérateur</h2>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>
<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/site-de-rencontre/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 100, borderRadius: 5, display: 'flex', paddingLeft: 20, paddingRight: 30, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth: 100, minWidth: 100}}>
          <Image src={sitederencontre} width={600} height={400}/>
        </div>
        <div style={{marginTop: -7, marginLeft: -3}}>
          <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Site de rencontre</h2>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>
<Col lg={6}>
    <div style={{marginTop: 10}}>
      <Link href={`/matelas/`} id='textOnHover' passHref>
      <a id='tabLink'>
        <div style={{minHeight: 100, borderRadius: 5, display: 'flex', paddingLeft: 20, paddingRight: 30, paddingTop: 25, paddingBottom : 16}}  id='cardOnHoverMarket'>
        <div style={{maxWidth: 100, minWidth: 100}}>
          <Image src={matelas} width={600} height={400}/>
        </div>
        <div style={{marginTop: -7, marginLeft: -3}}>
          <h2 id='homeboxesh2'style={{fontFamily: 'Montserrat'}}>Matelas</h2>
        </div>
        </div>
        </a>
      </Link>
    </div>
</Col>








            </Row>
            </Container>

  )
}




export default Latest


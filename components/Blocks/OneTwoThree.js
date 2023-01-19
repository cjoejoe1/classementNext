import React from 'react'
import {FaUserAstronaut, FaRegSmile, FaListOl, FaUserPlus } from 'react-icons/fa'
import {FaAngleDoubleRight} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col, Button} from "react-bootstrap";


const OneTwoThree = (props) => {
  return (
    <Container style={{ maxWidth: 800, marginTop: 100, marginBottom : 100}}>
    

    <h2 id="comment" style={{textAlign: 'center', marginBottom: 40, fontWeight: 700, fontSize: 60}}>Comment ça marche ?</h2>  

    <p className="lead" style={{textAlign: 'center', margin: 'auto', marginTop: 0, marginBottom: 80}} > {"Recevez votre comparatif en 3 étapes"}</p>

            <Row style={{maxWidth: 1000, margin: 'auto', marginBottom: 70, marginTop: 100}}>

            <div  className='col-sm-6 order-md-2 order-sm-6' >
                    <h5 style={{fontWeight: 300}} id="stepMobile">Étape 1</h5>
                    <h4 style={{fontSize: 30, lineHeight: '46px', fontFamily: 'Montserrat'}} id="stepMobile">
                 Inscription super <br></br> rapide.
                </h4>
                <p style={{ margin: 'auto', marginTop: 20, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', fontFamily: 'Montserrat'}} id="stepMobile">{props.step1text || 'Remplissez simplement votre email pour recevoir votre comparatif'}</p>
              {/* <div id="stepMobile">
              <Link href="#"><Button id="oneButton">Start Now <FaAngleDoubleRight/></Button></Link>
              </div> */}
          
              </div>

              <Col>

              <div style={{textAlign: 'center'}}>
              <Link href="#" passHref>
              <FaUserPlus style={{fontSize: 150, marginTop: 0, marginBottom : 25, color: '#0d6efd', textAlign: 'center'}}/>
              </Link>
          </div>
              </Col>

            </Row>


            <Row style={{maxWidth: 1000, margin: 'auto', marginBottom: 70, marginTop: 130}}>
            
            <div className='col-sm-6 order-md-2 order-sm-6' >
               <h5 style={{fontWeight: 300}} id="stepMobile">Étape 2</h5>
               <h4 style={{fontSize: 30, lineHeight: '46px', fontFamily: 'Montserrat'}} id="stepMobile">
               Recevez votre comparatif.
              <br className="d-none d-sm-block d-md-none d-xl-block" />
             
            </h4>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 20, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', fontFamily: 'Montserrat'}}id="stepMobile">Votre comparatif <br></br>+ un guide d'achat <br></br>+ des d'offres promos</p>
            {/* <div id="stepMobile">
            <Link href="#"><Button id="oneButton">Call Me Back <FaAngleDoubleRight/></Button></Link></div> */}
            </div>
            <Col sm={6}>
            <div style={{textAlign: 'center'}}>
            <Link href="#" passHref>
            <FaListOl style={{fontSize: 150, marginTop: 0, marginBottom : 25, color: '#0d6efd'}}/>
          </Link>
           </div>
            </Col>
            </Row>

            <Row style={{maxWidth: 1000, margin: 'auto', marginBottom: 70, marginTop: 130}}>
            
            <div className='col-sm-6 order-md-2 order-sm-6' >
              <h5 style={{fontWeight: 300}} id="stepMobile">Étape 3</h5>
              <h4 style={{fontSize: 30, lineHeight: '46px', fontFamily: 'Montserrat'}} id="stepMobile">
            {props.step3 || "Trouvez le meilleur produit."}
       
            </h4>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginTop: 20, marginBottom: 20, fontSize: 21, fontWeight: 300, letterSpacing: -0.66, lineHeight: '38px', fontFamily: 'Montserrat'}}id="stepMobile">
            {props.step3Text || "0% Stress. Vous n'avez plus qu'à acheter votre produit avec confiance."}</p>
            {/* <div id="stepMobile">
           
            <Link href="#"><Button id="oneButton">{props.button3 || "Find The Best Offers"} <FaAngleDoubleRight/></Button></Link>   </div> */}
            </div>
          
            <Col sm={6} >

<div style={{textAlign: 'center'}}>
<Link href="#" passHref>
<FaRegSmile style={{fontSize: 150, marginTop: 0, marginBottom : 25, color: '#0d6efd'}}/>
</Link>
</div>

                              </Col>
            </Row>
<div style={{maxWidth: 300, margin: 'auto'}}>
<Link href="#">
<Button id={props.buttonDesign || 'comparateurButton'} type="submit" className="btn-lg btn-primary" style={{minWidth: 290, height: 60, boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500}}>{"Je m'inscris"} <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Button>

  </Link>
</div>
            </Container>
  )
}

export default OneTwoThree
import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import {FaUserAstronaut, FaRegSmile, FaListOl, FaUserPlus } from 'react-icons/fa'
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import Link from 'next/link'
const What = () => {

  return (
    <Container fluid style={{ margin: 'auto', position: 'relative', zIndex: 5, background: 'white', paddingTop: 100, marginBottom: 100}} >
      <div >
    <h2 className="display-4" style={{textAlign: 'center', marginBottom: 40, fontWeight: 700, fontSize: 60}}>Comment ça marche?</h2>
    <p className="lead" id="min992" style={{textAlign: 'center', margin: 'auto', fontFamily: 'unset', fontSize: 24, marginTop: -20, marginBottom: 80}} > {"Recevez votre comparatif en 3 étapes"}</p>

      <Row style={{maxWidth: 1000, margin: 'auto'}}>
        <Col sm={4} style={{textAlign: 'center'}}>
        <Link href={"/"}>
             <a style={{textDecoration: 'none', color: 'black'}}>
          <FaUserPlus style={{fontSize: 100, marginTop: 0, marginBottom : 25, color: '#0d6efd', textAlign: 'center'}}/>
          <div style={{fontSize: 35, fontWeight: 800, marginTop: -42, marginBottom: -20}}>
            <span style={{borderRadius: '50%', color: 'white', background: 'rgb(25 25 27)', paddingLeft: 15, paddingRight: 15}}>1</span>
            </div>
          <h3>Inscription super rapide</h3>
          <p>Remplissez simplement votre email pour recevoir votre comparatif</p>
          </a></Link>
        </Col>

        <Col sm={4}  style={{textAlign: 'center'}}>
               {/* Image */}
               <Link href={"/"}>
             <a style={{textDecoration: 'none', color: 'black'}}>
               <FaListOl style={{fontSize: 100, marginTop: 0, marginBottom : 25, color: '#0d6efd'}}/>
               <div style={{fontSize: 35, fontWeight: 800, marginTop: -42, marginBottom: -20}}>
                  <span style={{borderRadius: '50%', color: 'white', background: 'rgb(25 25 27)', paddingLeft: 12, paddingRight: 12}}>2</span></div>
               <h3>Recevez votre comparatif</h3>
          <p>Votre comparatif <br></br>+ un guide d'achat <br></br>+ des d'offres promos</p>
          </a></Link>
        </Col>

        <Col sm={4} style={{textAlign: 'center'}}>
        <Link href={"/"}>
             <a style={{textDecoration: 'none', color: 'black'}}>
             <FaRegSmile style={{fontSize: 100, marginTop: 0, marginBottom : 25, color: '#0d6efd'}}/>
             <div style={{fontSize: 35, fontWeight: 800, marginTop: -42, marginBottom: -20}}>
             <span style={{borderRadius: '50%', color: 'white', background: 'rgb(25 25 27)', paddingLeft: 12, paddingRight: 12}}>3</span></div>
             <h3>Trouvez le meilleur produit</h3>
          <p>0% Stress. Vous n'avez plus qu'à acheter votre produit avec confiance.</p>
          </a></Link>
        </Col>
      </Row>
      </div>
    </Container>

  )
}

export default What
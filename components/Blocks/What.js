import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import {FaUserAstronaut } from 'react-icons/fa'
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import Link from 'next/link'
const What = () => {

  return (
    <Container fluid style={{ margin: 'auto', position: 'relative', zIndex: 5, background: 'white', paddingTop: 100, marginBottom: 100}} >
      <div >
    <h2 className="display-4" style={{textAlign: 'center', marginBottom: 40, fontWeight: 700, fontSize: 60}}>Comment ça marche?</h2>
    <p className="lead" style={{maxWidth: 1000, textAlign: 'center', margin: 'auto', fontFamily: 'unset', fontSize: 24, marginTop: -30, marginBottom: 80}} > {"Recevez vos idées business en 3 étapes"}</p>

      <Row style={{maxWidth: 1000, margin: 'auto'}}>
        <Col sm style={{textAlign: 'center'}}>
        <Link href={"/"}>
             <a style={{textDecoration: 'none', color: 'black'}}>
          <AiOutlineUserAdd style={{fontSize: 150, marginTop: 0, marginBottom : 25, color: 'rgb(240, 0, 87)', textAlign: 'center'}}/>
          <div style={{fontSize: 35, fontWeight: 800, marginTop: -42, marginBottom: -20}}>
            <span style={{borderRadius: '50%', color: 'white', background: 'rgb(25 25 27)', paddingLeft: 14, paddingRight: 14}}>1</span>
            </div>
          <h3>Inscription super rapide</h3>
          <p>Remplissez simplement votre email et choisissez votre abonnement pour recevoir vos 7 premières idées business.</p>
          </a></Link>
        </Col>

        <Col sm style={{textAlign: 'center'}}>
               {/* Image */}
               <Link href={"/"}>
             <a style={{textDecoration: 'none', color: 'black'}}>
               <FaUserAstronaut style={{fontSize: 140, marginTop: 0, marginBottom : 25, color: 'rgb(240, 0, 87)'}}/>
               <div style={{fontSize: 35, fontWeight: 800, marginTop: -30, marginBottom: -20}}> <span style={{borderRadius: '50%', color: 'white', background: 'rgb(25 25 27)', paddingLeft: 14, paddingRight: 14}}>2</span></div>
               <h3>Un email remplit d'idées</h3>
          <p>  Un email par semaine avec des opportunités, des nouvelles tendances et des signaux en directs des US et d'Asie.</p>
          </a></Link>
        </Col>

        <Col sm style={{textAlign: 'center'}}>
        <Link href={"/"}>
             <a style={{textDecoration: 'none', color: 'black'}}>
             <IoIosRocket style={{fontSize: 180, marginTop: -5, marginBottom : -1, color: 'rgb(240, 0, 87)'}}/>
             <div style={{fontSize: 35, fontWeight: 800, marginTop: -37, marginBottom: -20}}> <span style={{borderRadius: '50%', color: 'white', background: 'rgb(25 25 27)', paddingLeft: 14, paddingRight: 14}}>3</span></div>
             <h3>  Lancez, testez, copiez !</h3>
          <p> Inspirez-vous de chaque idée pour lancer un business ou encore faire grossir votre entreprise.</p>
          </a></Link>
        </Col>
      </Row>
      </div>
    </Container>

  )
}

export default What
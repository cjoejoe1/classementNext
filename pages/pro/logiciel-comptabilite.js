import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import Layout from '../../components/layout'
import Link from 'next/link'
import DataTable from '../../components/data/accountingSoftware/accountingSoftware'
import DataTableMobile from '../../components/data/accountingSoftware/accountingSoftwareMobile'
import Disclosure from '../../components/Blocks/Disclosure'
import Seo from "../../components/seo";

function Accounting(props) {

var d = new Date();
var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
var n = month[d.getMonth()];
var y = d.getFullYear();

    return (
      <Layout target="pro">

            <Seo
        title="Logiciel de comptabilité - Meilleur logiciel de comptabilité pour votre business"
        description="Trouver le meilleur logiciel de comptabilité pour votre business avec createur.com"
      />
 <Breadcrumbs link="/pro/"  text='Logiciel de Comptabilité'  cat="Pro"/>
 <Container fluid style={{background: 'rgb(243,243,243)', paddingTop: 100, paddingBottom: 50}}>
   
   <Container style={{maxWidth: 1140}}>
   
          <h1 id='compareh1'>Logiciel de comptabilité <span id='noMobile'>(Classement 2025)</span></h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24}}>Trouver le meilleur logiciel de comptabilité pour votre business (mise à jour {n} {y})</p>
          <div style={{marginLeft: 10, marginTop: 0}}>
       <p style={{fontSize: 16}}><span id='oneTwo'>1</span> Utilisez le menu de notre <span style={{fontWeight: 700}}>comparateur de logiciels comptables</span> pour déterminer vos priorités.</p>
       <p style={{fontSize: 16}}><span id='oneTwo'>2</span> Comparez les offres par tarifs ainsi que les offres promos disponible dès aujourd’hui</p>
       <p style={{fontSize: 16}}><span id='oneTwo'>3</span> Sélectionnez le <span style={{fontWeight: 700}}>meilleur logiciel comptable</span>, celui qui correspond le plus a vos besoins.</p>
       </div>
       <Disclosure/>

  </Container>  
          <Row style={{background: 'rgb(243,243,243)', height: 120, marginTop: -25, marginBottom: -50}}>

          </Row>
          </Container>

          <Container style={{maxWidth: 1140, marginTop: -100}}>
            <Row className="justify-content-center">
              <Col>
            

                <DataTable/>
                <DataTableMobile/>
       
              </Col>
            </Row>
          </Container>
          </Layout >
    )
}

export default Accounting

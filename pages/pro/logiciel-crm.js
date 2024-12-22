import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import Layout from '../../components/layout'
import Link from 'next/link'
import FilterForm from '../../components/data/crmSoftware/FilterForm'
import FilterFormMobile from '../../components/data/crmSoftware/FilterFormMobile'
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
        title="Logiciel CRM - Meilleur logiciel CRM pour votre business"
        description="Trouver le meilleur logiciel CRM pour votre business avec createur.com"
      />

<Breadcrumbs link="/pro/"  text='Logiciel CRM' cat="Pro"/>
<Container fluid style={{background: 'rgb(243,243,243)', paddingTop: 100, paddingBottom: 50}}>
   
   <Container style={{maxWidth: 1140}}>

          <h1 id='compareh1'>Logiciel CRM <span id='noMobile'>(Classement 2025)</span></h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24, marginTop: -10}}>Trouver le meilleur logiciel CRM pour votre business (mise à jour {n} {y})</p>
          <div style={{marginLeft: 10, marginTop: 0}}>
       <p style={{fontSize: 16}}><span id='oneTwo'>1</span> Utilisez le menu de notre <span style={{fontWeight: 700}}>comparateur de logiciels CRM</span> pour déterminer vos priorités.</p>
       <p style={{fontSize: 16}}><span id='oneTwo'>2</span> Comparez les offres par tarifs ainsi que les offres promos disponible dès aujourd’hui</p>
       <p style={{fontSize: 16}}><span id='oneTwo'>3</span> Sélectionnez le <span style={{fontWeight: 700}}>meilleur logiciel CRM</span>, celui qui correspond le plus a vos besoins.</p>
       </div>
       <FilterForm/>
       <FilterFormMobile/>

  </Container>  
          <Row style={{height: 120, marginTop: -25, marginBottom: -50}}>

          </Row>
          </Container>

          <Container style={{maxWidth: 1140, marginTop: -100}}>
            <Row className="justify-content-center">
              <Col>
            

                {/* <DataTable/> */}

       
              </Col>
            </Row>
          </Container>
          </Layout>
    )
}

export default Accounting

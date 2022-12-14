import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import Layout from '../components/layout'
import Link from 'next/link'
import Disclosure from '../components/Blocks/Disclosure'
import Seo from "../components/seo";
import DataTable from '../components/data/wordpressHosting/wordpressHosting'
import DataTableMobile from '../components/data/wordpressHosting/wordpressHostingMobile'
import { Article, Input } from "../components/Core";

function Accounting(props) {

var d = new Date();
var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
var n = month[d.getMonth()];
var y = d.getFullYear();

    return (
      <Layout >
              <Seo
        title="Hébergement Wordpress - Meilleur hébergement Wordpress pour votre business"
        description="Trouver le meilleur hébergement Wordpress pour votre business avec createur.com"
      />
        
        <Breadcrumbs text='Hébergement Wordpress' cat="Kit du créateur"/>
          <Container fluid style={{background: 'rgb(243,243,243)', marginTop: 100, paddingTop: 20, paddingBottom: 50}}>
          <Container style={{maxWidth: 1280}}>
       
          <h1 id='compareh1'>Hébergement Wordpress : comparaison</h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24}}>Trouver le meilleur wordpress pour votre business (mise à jour {n} {y})</p>
       <Disclosure/>

  </Container>  
          <Row style={{background: 'rgb(243,243,243)', height: 120, marginTop: -25, marginBottom: -50}}>

          </Row>
          </Container>

          <Container style={{maxWidth: 1280, marginTop: -100}}>
            <Row className="justify-content-center">
              <Col>
            

                <DataTable/>

                <DataTableMobile/>
              </Col>
            </Row>
          </Container>
          </Layout>
    )
}

export default Accounting

import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import Layout from '../components/layout'
import Link from 'next/link'
import Disclosure from '../components/Blocks/Disclosure'
import Seo from "../components/seo";
import DataTable from '../components/data/microPodcast/microPodcast'
import DataTableMobile from '../components/data/microPodcast/microPodcastMobile'
import { Article, Input } from "../components/Core";


function hebergementPodcast(props) {



    return (
      <Layout >
               <Seo
        title="Comparatif micro pour podcast - meilleur micro pour votre podcast"
        description="Trouvez le meilleur micro pour votre podcast avec le comparatif complet sur createur.com"
      />
   
   <Breadcrumbs text='Micro Podcast' cat="Kit du créateur"/>
          <Container fluid style={{background: 'rgb(243,243,243)', marginTop: 100, paddingTop: 20, paddingBottom: 50}}>
          <Container style={{maxWidth: 1280}}>
          {/* <Row style={{background: 'black'}}> */}

      {/* </Row> */}

      <h1 id='compareh1'>Meilleur micro podcast de {y}</h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24}}>Quel est le meilleur micro pour votre podcast?</p>
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

export default hebergementPodcast

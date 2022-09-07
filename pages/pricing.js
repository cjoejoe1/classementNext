import React from 'react'
import {Container} from "react-bootstrap"
import Seo from '../components/seo';
import { TitleBlock } from '../components/common';
import PriceTable from '../components/Blocks/PriceTable';
import Tabs from '../components/Blocks/Tabs'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'

function Pricing(props) {
  

              return (
                <Layout path={props.path}>
      
              <Seo title="How much does Stimply cost?"/>
              <Breadcrumbs link='/pricing/' text='Pricing'/>
              <Container style={{ maxWidth: 1260, marginTop: 174}}>
              <TitleBlock><h1>Pricing</h1></TitleBlock>
              <p className="lead" style={{margin: 'auto', marginTop: 10, fontSize: 21, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px', textAlign: 'center', marginBottom: 70, maxWidth: 800}}>We offer a very simple price structure. Your website + CRM for £39/month.</p>
              <PriceTable/>
              </Container>
              <section style={{marginBottom: -130, marginTop: 130}}>
              <Tabs/>
              </section>
              </Layout>
              )

}

export default Pricing
import React from 'react'
import {Container} from "react-bootstrap"
import Seo from '../components/seo';
import { TitleBlock } from '../components/common';
import FormContact from '../components/Blocks/FormContact';
import Tabs from '../components/Blocks/Tabs'
import Template from '../components/Blocks/Template'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'

function Pricing(props) {
  

              return (
                <Layout path={props.path}>
      
              <Seo title="Get started!"/>
              <Breadcrumbs link='/start/' text='Start'/>
              <Container style={{ maxWidth: 1240, marginTop: 174}}>
              <TitleBlock><h1>Answer 6 simple questions. <br></br> And we will <span style={{textDecoration: 'underline'}}>build your website</span>!</h1></TitleBlock>
              {/* <p className="lead" style={{margin: 'auto', marginTop: -20, fontSize: 28, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px', textAlign: 'center', marginBottom: 70, maxWidth: 800}}>Fill in the following form to schedule a call back with your UK based dedicated advisor.</p> */}
                 <div style={{ maxWidth: 800, margin: 'auto', marginTop: 0}}>
                <Template/>
              </div>
            <div style={{maxWidth: 600, margin: 'auto', marginTop: 30}}>
             <FormContact/>
             </div>
        
              </Container>
              <section style={{marginBottom: -130, marginTop: 130}}>
              <Tabs/>
              </section>
              </Layout>
              )

}

export default Pricing
import React from 'react'
import {Container} from "react-bootstrap"
import Seo from '../components/seo';
import { TitleBlock, TextBlock } from '../components/common';
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
function PrivacyPolicy(props) {

  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq('track', 'Lead');
      console.log('i am tracking Lead')
    }
  }

      if (typeof window !== "undefined") {
      if (window.fbq != null) {
        fbq('track', 'Lead');
        console.log('i am tracking Lead')
      }
    }


  return (

    <Layout>
        <Seo title="Thank You"/>
        <Breadcrumbs link='/thank-you-contact/' text='Thank You'/>
        <Container  id='mobileContact' style={{ maxWidth: 1260, marginTop: 174, minHeight: 600}}>
        <TitleBlock><h1>Thank You</h1></TitleBlock>
        <p className="lead" style={{maxWidth: 800, textAlign: 'center', margin: 'auto', marginBottom: 40}}>We will contact you shortly.</p>
          <TextBlock>
         
          </TextBlock>
        </Container>
        </Layout>

  )
}

export default PrivacyPolicy

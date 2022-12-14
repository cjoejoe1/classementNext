import * as React from "react"
import Seo from '../components/seo';
import Layout from '../components/layout'
import HomeBoxes from '../components/Blocks/HomeBoxes'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Newsletter from '../components/Newsletter/'


const Index = props => {

  return (
    <Layout >
      
      <Seo title="Idées business à lancer en 2023 - Createur.com" description="La newsletter des idées business"/>
      <Container style={{maxWidth: 1280, marginTop: 150}}>
        <h1 style={{textAlign: 'center'}}>Classements Pour Les <span style={{textDecoration: 'underline', textDecorationColor: '#0074C6'}}>Pros</span></h1>
        <p style={{textAlign: 'center', fontSize: 30, color: 'grey'}}>Logiciels, outils et services pours les indépendants et PME</p>
        <div style={{maxWidth: 600, margin: 'auto', marginTop: 40}}>
        <Newsletter/>
        </div>
      <HomeBoxes/>
      </Container>
      {/* <Hero/> */}
      {/* <Tick/> */}
      {/* <What/> */}
      {/* <Tabs/> */}
      {/* <ForWho/> */}
      {/* <ForWhoReverse/> */}
      {/* <Testimonials/> */}
      {/* <Who/> */}
      {/* <Faq/> */}
    </Layout>
  )
}

export default Index

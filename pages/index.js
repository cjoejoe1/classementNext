import * as React from "react"
import Seo from '../components/seo';
import Layout from '../components/layout'
import HomeBoxes from '../components/Blocks/HomeBoxes'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Newsletter from '../components/Newsletter/'
import Image from 'next/image'
import pro from '../images/pro.png'
const Index = props => {

  return (
    <Layout >
      
      <Seo title="Classements pour les pros - Classement.com" description="Comparatif et classements pour les pros"/>
      <Container style={{maxWidth: 1140, marginTop: 100}}>
       

       
        <div style={{background: '#349fff38', padding: 50, borderRadius: 30, paddingLeft: 80, paddingBottom : 0}}>
        <div style={{display: 'flex'}}>
          <div>
          <h1 id='h1home' style={{textAlign: 'left', color: 'rgb(1 61 123)', marginTop: 35}}>Classements pour les professionnels</h1>
          <p style={{fontSize: 20, color: 'black'}}><span style={{fontWeight: 700}}>Comparatif</span> est <span style={{fontWeight: 700}}>avis</span> pours les indépendants et PME</p>
          <div style={{maxWidth: 600, marginTop: 40}}>
          <Newsletter/>
          </div>
        </div>
        

        <div style={{marginLeft: 80}}>
         <Image src={pro} width={300} height={300}/>
        </div>
        </div>
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

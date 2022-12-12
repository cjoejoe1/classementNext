import * as React from "react"
import Seo from '../components/seo';
import Layout from '../components/layout'
import Hero from '../components/Blocks/HeroPicture'
import Tick from '../components/Blocks/Tick'
import What from '../components/Blocks/What'
import Tabs from '../components/Blocks/Tabs'
import ForWho from '../components/Blocks/ForWho'
import ForWhoReverse from '../components/Blocks/ForWhoReverse'
import Testimonials from '../components/Blocks/Testimonials'
import Who from '../components/Blocks/Who'
import Faq from '../components/Blocks/FAQ'



const Index = props => {

  return (
    <Layout >
      
      <Seo title="Idées business à lancer en 2023 - Createur.com" description="La newsletter des idées business"/>
      
      <Hero/>
      {/* <Tick/> */}
      <What/>
      {/* <Tabs/> */}
      <ForWho/>
      <ForWhoReverse/>
      <Testimonials/>
      {/* <Who/> */}
      <Faq/>
    </Layout>
  )
}

export default Index

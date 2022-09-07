import * as React from "react"
import Seo from '../components/seo';
import Layout from '../components/layout'
import Hero from '../components/Blocks/HeroPicture'
import Tick from '../components/Blocks/Tick'
import What from '../components/Blocks/What'
import Tabs from '../components/Blocks/Tabs'
import ForWho from '../components/Blocks/ForWho'
import Testimonials from '../components/Blocks/Testimonials'
import Who from '../components/Blocks/Who'
import Faq from '../components/Blocks/FAQ'



const Index = props => {

  return (
    <Layout >
      
      <Seo title="Stunning Websites For Real Businesses" description="Sit back and relax while we will build your website for you."/>
      
      <Hero/>
      <Tick/>
      <What/>
      <Tabs/>
      <ForWho/>
      <Testimonials/>
      <Who/>
      <Faq/>
    </Layout>
  )
}

export default Index

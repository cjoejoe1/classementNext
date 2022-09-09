import React from 'react'
import {Container, Button} from "react-bootstrap"
import Seo from '../components/seo';
import { TitleBlock } from '../components/common';
import FormContact from '../components/Blocks/FormContact';
import Template from '../components/Blocks/Template'
import Tabs from '../components/Blocks/Tabs'
import ForWho from '../components/Blocks/ForWho'
import Testimonials from '../components/Blocks/Testimonials'
import Who from '../components/Blocks/Who'
import FAQ from '../components/Blocks/FAQ'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import PriceTable from '../components/Blocks/PriceTable'
import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'
import { useRouter } from 'next/router'

function Pricing(props) {
  const router = useRouter()

              return (
                <Layout path={router.pathname}>
      
              <Seo title="Get started!"/>
              {/* <Breadcrumbs link='/start/' text='Start' path={router.pathname}/> */}
              <Container style={{ maxWidth: 1240, marginTop: 174}}>
              <TitleBlock><h1>Answer 6 simple questions. <br></br> And we will <span style={{textDecoration: 'underline'}}>build your website</span>!</h1></TitleBlock>
              {/* <p className="lead" style={{margin: 'auto', marginTop: -20, fontSize: 28, fontWeight: 300, 
    letterSpacing: -0.66, lineHeight: '38px', textAlign: 'center', marginBottom: 70, maxWidth: 800}}>Fill in the following form to schedule a call back with your UK based dedicated advisor.</p> */}
               <div style={{ maxWidth: 800, margin: 'auto', marginTop: 30}}>
                <Template/>
              </div>
            <div style={{maxWidth: 600, margin: 'auto', marginTop: 30}}>
             <FormContact path={router.pathname}/>
             </div>
              </Container>
           
              <section style={{marginBottom: -130, paddingTop: 130, marginTop: 0}} id='tabsAnchor'>
              <Tabs/>
          
              </section>
              <div style={{marginTop: 300}}>
              <ForWho/>
              </div>
              <div style={{width: 250, marginTop: 50, margin: 'auto'}}>
       <Link href="#" passHref>
         <Button id='buttonHover' className="btn-lg btn btn btn-primary" style={{fontWeight: 700, paddingTop: 12, height: 60, minWidth: 250, margin: 'auto', marginTop: 30}}>Build my website <span style={{fontSize: 18}}><FaArrowRight /></span></Button>
        </Link>
  
        </div>
              <div style={{marginTop: 150}}>
       <Testimonials/>
       </div>
    

       <div style={{marginTop: 150}}>
       <Who/>
       </div>
       <div style={{maxWidth: 800, margin: 'auto', marginTop: 150 }}>
        <h2 className="display-4" style={{textAlign: 'center', marginBottom: 20, fontWeight: 700, fontSize: 60}} data-aos="fade-up" data-aos-duration="250">Pricing</h2>
        <p className="lead" style={{maxWidth: 800, textAlign: 'center', margin: 'auto', marginBottom: 40}}  data-aos="fade-up" data-aos-duration="250">Everything you need to grow online for £29/month.</p>
       <PriceTable path={router.pathname}/>
       </div>
       <div style={{maxWidth: 1000, margin: 'auto', marginTop: 150 }}>
       <FAQ/>
       </div>
              </Layout>
              )

}

export default Pricing
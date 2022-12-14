import React from 'react'
import {createClient} from 'contentful'
import {useState, useEffect} from 'react'
import {firebase, auth} from '../../utils/firebaseData'
import {useAuthState} from 'react-firebase-hooks/auth'
import Head from 'next/head'
import Header from "../../components/Header";
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import {Container, Row, Col} from 'react-bootstrap'
import { TitleBlock } from '../../components/common';
import {ArticleCard} from '../../components/Blocks/ArticleCard'
import Link from 'next/link'
import Image from 'next/image'

// export async function getStaticProps(){

//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID, 
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   })

//   const res = await client.getEntries({content_type: 'blogPost'})

//   return {
//     props: {
//       articles: res.items
//     }
//   }
// }


export default function Dash ({articles}) {


  const [user, loading, error] = useAuthState(auth)
  
  const renderArticle = (item, index) => {
    console.log()
    return (
      <Col lg='12' id='fundingBottom'>
      <Link href={item.fields.slug} id='textOnHover' >
        <div id='cardOnHover' style={{borderRadius: 5, display: 'flex'}}>
  
          <div style={{maxWidth: 150, padding: 10}}>
            <Image src={'https:' + item.fields.heroImage.fields.file.url} width={item.fields.heroImage.fields.file.details.image.width} height={item.fields.heroImage.fields.file.details.image.height} alt={item.fields.title} placeholder='tracedSVG'
            style={{marginLeft: 0, borderRadius: 5}}/>
          </div>
  
          <div style={{padding: 15}}><h3 id="h3FundingBlock">
              {item.fields.title} <span style={{background: 'rgba(215, 212, 212, 0.69)', paddingLeft: 5, paddingRight: 5, paddingTop:5, paddingBottom: 5, borderRadius: 5, fontSize: 12, marginTop: -10}}>{item.tag}</span>
                </h3>
                <p id="pFundingBlock" style={{marginTop: 20}}>
              {item.fields.description.slice(0,130) + '...'}
              </p>
            
          </div>
        </div>
      </Link></Col>
    )
   
  }
  
  console.log('articles', articles)
  return (
    <Layout email={user?.email}>
    
    <Seo title="Espace Membre | Createur.com"/>
    <Breadcrumbs text='Espace Membre'/>
      <Container style={{ maxWidth: 800, marginTop: 174}}>
      <TitleBlock><h1>Espace Membre</h1></TitleBlock>
      <div >
    
      {
        user?.email ?
        <>
      
        <div style={{maxWidth: 1380, margin: 'auto', marginTop: 60, paddingTop: 5, textAlign: 'center'}}>

        {/* <Menu handleShow={handleShow} isPro={isPro}/> */}

 
        {/* {getDash()} */}
        {/* <h1>Logged in</h1> */}
        <Row id='fundingMobile' className="align-items-center justify-content-center">
        {/* {articles && articles.map(renderArticle)
  
      
        } */}
        </Row>
        </div> 
        </>
        : 
        <div>
          {/* <h1>Not logged in</h1> */}

        </div> 

      } 

    </div>
      </Container>
    </Layout>
  )
}

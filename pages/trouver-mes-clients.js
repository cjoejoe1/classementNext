import {createClient} from 'contentful'
import {Container, Row} from 'react-bootstrap'
import ArticleCard from '../components/Blocks/ArticleCard'
import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { TitleBlock } from '../components/common';
export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, 
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({content_type: 'blogPost'})

  return {
    props: {
      articles: res.items
    }
  }
}

export default function IdeesBusiness ({articles}) {


  return (

    <Layout >
    
    <Seo title="Trouver mes clients | Createur.com"/>
    <Breadcrumbs text='Trouver mes clients'/>
      <Container style={{ maxWidth: 800, marginTop: 174}}>
      <TitleBlock><h1>Trouver mes clients</h1></TitleBlock>
        <Row id='fundingMobile' className="align-items-center justify-content-center">
        {articles
          .filter(article => article.fields.tags.includes('trouver mes clients'))
          .map(article => (
          <ArticleCard key={article.sys.id} article={article} tag='trouver mes clients'/>
          ))
        }
        </Row>
      </Container>
    </Layout>
  )
}
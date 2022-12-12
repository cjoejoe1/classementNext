import Breadcrumbs from '../components/Blocks/Breadcrumbs'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {Container} from 'react-bootstrap'
import { TitleBlock } from '../components/common';
import {createClient} from 'contentful'
import Link from 'next/link'
import Image from 'next/image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, 
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {

  const res = await client.getEntries({
    content_type: 'blogPost'
  })

  const paths = res.items.map(item => {
    return {
      params: {slug: item.fields.slug}
    }
  })

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({params}){

  const {items} = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })

  return {
    props: {article: items[0]}
  }
  
}

export default function Idee({article}) {

  console.log('article is', article)

  const {title, description, slug, heroImage, richText} = article.fields

  const getBreadLink = () => {
    if(article.fields.tags.includes('idées business')) return '/idees-business/'
    else if(article.fields.tags.includes('je me lance')) return '/je-me-lance/'
    else if(article.fields.tags.includes('trouver mes clients')) return '/trouver-mes-clients/'
  }

  const getBreadCat= () => {
    if(article.fields.tags.includes('idées business')) return 'Idées business'
    else if(article.fields.tags.includes('je me lance')) return 'Je me lance'
    else if(article.fields.tags.includes('trouver mes clients')) return 'Trouver mes clients'
  }

  return (
  <Layout >
    
  <Seo title={article.fields.title}/>
  <Breadcrumbs link={getBreadLink()} cat={getBreadCat()} text={article.fields.title}/>
    <Container style={{ maxWidth: 1280, marginTop: 174}}>
    <TitleBlock style={{maxWidth: 800, margin: 'auto', marginBottom : 30}}><h1>{article.fields.title}</h1></TitleBlock>
    <div style={{maxWidth: 800, margin: 'auto'}}>

   
    <Image src={'https:' + heroImage.fields.file.url} width={heroImage.fields.file.details.image.width} height={heroImage.fields.file.details.image.height} alt={title} placeholder='tracedSVG'
          style={{ borderRadius: 5}}/>
   </div>
   <div style={{maxWidth: 800, margin: 'auto', marginTop:50}}>
    {documentToReactComponents(richText)}
    </div>

    </Container>
    </Layout>
  )
}
import {Col} from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'


const ArticleCard = ({article, tag}) => {

  const {title, description, slug, heroImage} = article.fields

  return (
    <Col lg='12' id='fundingBottom'>
    <Link href={slug} id='textOnHover' >
      <div id='cardOnHover' style={{borderRadius: 5, display: 'flex'}}>

        <div style={{maxWidth: 150, padding: 10}}>
          <Image src={'https:' + heroImage.fields.file.url} width={heroImage.fields.file.details.image.width} height={heroImage.fields.file.details.image.height} alt={title} placeholder='tracedSVG'
          style={{marginLeft: 0, borderRadius: 5}}/>
        </div>

        <div style={{padding: 15}}><h3 id="h3FundingBlock">
            {title} <span style={{background: 'rgba(215, 212, 212, 0.69)', paddingLeft: 5, paddingRight: 5, paddingTop:5, paddingBottom: 5, borderRadius: 5, fontSize: 12, marginTop: -10}}>{tag}</span>
              </h3>
              <p id="pFundingBlock" style={{marginTop: 20}}>
            {description.slice(0,130) + '...'}
            </p>
          
        </div>
      </div>
    </Link></Col>
  )
}

export default ArticleCard